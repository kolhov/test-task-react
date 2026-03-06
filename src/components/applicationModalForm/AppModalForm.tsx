import {
  Box,
  Button,
  Checkbox,
  Dialog,
  Field,
  FileUpload,
  Portal,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { categoriesData, pharmacyData, priorityData } from "@/mock/data";
import SelectWrap from "../ui/SelectWrap";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

interface FormData {
  pharmacy: string[];
  category: string[];
  warranty: string;
  theme: string;
  priority: string[];
  describtion: string;
}

export default function AppModalForm() {
  const [open, setOpen] = useState(false);
  const [isMobile] = useMediaQuery(["(max-width: 48rem)"]);
  const { handleSubmit, control, register } = useForm<FormData>();

  function onFormSubmit(data: FormData) {
    console.log(data);
    setOpen(false)
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={isMobile ? "full" : "xl"}
      placement={{ md: "center" }}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger asChild>
        <Button fontSize={"md"} w={"230px"}>
          <Icon
            icon={"pepicons-pop:plus"}
            style={{ scale: 1.3, marginLeft: "-8px" }}
          />
          Создать новую заявку
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content overflow={"auto"}>
            <Dialog.Header padding={"30px 36px 0px"}>
              <Dialog.Title
                mdDown={{ ml: "12px", fontSize: "20px" }}
                fontSize={"24px"}
              >
                Создание заявки
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body padding={{ base: "24px 16px", md: "32px 36px" }}>
              <Box
                as={"form"}
                id="appForm"
                flexDirection={{ base: "column", md: "row" }}
                style={{ display: "flex" }}
                gap={{ base: "35px", md: "32px" }}
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <Box flex={1}>
                  <Field.Root paddingBottom={{ base: "24px", md: "46px" }}>
                    <Field.Label>Аптека</Field.Label>
                    <Controller
                      control={control}
                      name="pharmacy"
                      render={({ field }) => (
                        <SelectWrap
                          placeholder="Выберите аптеку от которой исходит заявка"
                          rawData={pharmacyData.map((x) => ({
                            value: x.id,
                            label: x.address,
                          }))}
                          height={{ base: "42px", md: "48px" }}
                          value={field.value}
                          onValueChange={(e) => field.onChange(e.value)}
                          onBlur={field.onBlur}
                          name={field.name}
                        />
                      )}
                    />
                  </Field.Root>

                  <Field.Root paddingBottom={"16px"}>
                    <Field.Label>Категория заявки</Field.Label>
                    <Controller
                      control={control}
                      name="category"
                      render={({ field }) => (
                        <SelectWrap
                          placeholder="Холодильники, кондиционеры или другое"
                          rawData={categoriesData.map((x) => ({
                            value: x.id,
                            label: x.name,
                          }))}
                          height={{ base: "42px", md: "40px" }}
                          value={field.value}
                          onValueChange={(e) => field.onChange(e.value)}
                          onBlur={field.onBlur}
                          name={field.name}
                        />
                      )}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Controller
                      control={control}
                      name="warranty"
                      render={({ field }) => (
                        <Checkbox.Root
                          value={field.value}
                          onCheckedChange={({ checked }) =>
                            field.onChange(checked)
                          }
                          onBlur={field.onBlur}
                          name={field.name}
                        >
                          <Checkbox.HiddenInput />
                          <Checkbox.Control borderRadius={"5px"} />
                          <Checkbox.Label fontSize={"14px"} fontWeight={"400"}>
                            Гарантийный случай?
                          </Checkbox.Label>
                        </Checkbox.Root>
                      )}
                    />
                  </Field.Root>
                </Box>
                <Box
                  flex={1}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"24px"}
                >
                  <Field.Root>
                    <Field.Label>Тема заявки</Field.Label>
                    <Textarea
                      h={"66px"}
                      resize={"none"}
                      borderRadius={"8px"}
                      {...register("theme")}
                      placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Приоритет</Field.Label>
                    <Controller
                      control={control}
                      name="priority"
                      render={({ field }) => (
                        <SelectWrap
                          placeholder="влияет на эффективность, но не стопорит"
                          rawData={priorityData.map((x) => ({
                            value: x.id,
                            label: x.name,
                          }))}
                          height={{ base: "46px", md: "40px" }}
                          value={field.value}
                          onValueChange={(e) => field.onChange(e.value)}
                          onBlur={field.onBlur}
                          name={field.name}
                        />
                      )}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Описание проблемы</Field.Label>
                    <Textarea
                      height={"164px"}
                      resize={"none"}
                      {...register("describtion")}
                      placeholder="Кратко опишите проблему:

- что случилось?
- дата и время произошедшего?
- сколько длится проблема?
- насколько она влияет на вашу работу?"
                    />
                  </Field.Root>

                  <Field.Root hideBelow={"md"}>
                    <Field.Label>Прикрепите файлы</Field.Label>
                    <FileUpload.Root alignItems="stretch" maxFiles={10}>
                      <FileUpload.HiddenInput />
                      <FileUpload.Dropzone>
                        <FileUpload.DropzoneContent>
                          <Box fontWeight={"300"}>
                            Выберите или перетащите фото или файл
                          </Box>
                        </FileUpload.DropzoneContent>
                        <Icon width={"20px"} icon={"uiw:picture"}></Icon>
                      </FileUpload.Dropzone>
                      <FileUpload.List />
                    </FileUpload.Root>
                  </Field.Root>
                </Box>
              </Box>
            </Dialog.Body>
            <Dialog.Footer
              justifyContent={"flex-start"}
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: "10px", md: "17px" }}
              padding={{ base: "10px 16px", md: "0 0 40px 36px" }}
            >
              <FileUpload.Root maxFiles={10} hideFrom={"md"}>
                <FileUpload.List showSize clearable />
                <FileUpload.HiddenInput />
                <FileUpload.Trigger asChild>
                  <Button
                    variant="outline"
                    w={"full"}
                    bgColor={"#F1F1F1"}
                    h={"50px"}
                    fontWeight={500}
                  >
                    <Icon
                      icon={"ic:sharp-plus"}
                      style={{ translate: "0 2px" }}
                    />
                    Прикрепить файлы
                  </Button>
                </FileUpload.Trigger>
              </FileUpload.Root>

              <Button
                fontWeight={"400"}
                fontSize={"16px"}
                mdDown={{
                  height: "50px",
                  opacity: 0.5,
                  w: "full",
                  fontWeight: 500,
                }}
                type="submit"
                form="appForm"
              >
                Создать заявку
              </Button>
              <Dialog.ActionTrigger asChild hideBelow={"md"}>
                <Button
                  fontWeight={"400"}
                  fontSize={"16px"}
                  borderColor={"black"}
                  variant="outline"
                >
                  Отмена
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <Button
                variant={"ghost"}
                translate={{ base: "-85vw 2vh", md: "-8px 16px" }}
              >
                <Box hideBelow={"md"}>
                  <Icon
                    icon={"ic:sharp-close"}
                    style={{ scale: 1.4, opacity: 0.5 }}
                  />
                </Box>
                <Box hideFrom={"md"}>
                  <Icon
                    icon={"tabler:arrow-left"}
                    style={{ scale: 1.4, translate: "0 -1px" }}
                  />
                </Box>
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
