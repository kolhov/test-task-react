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

export default function AppModalForm() {
  const [isMobile] = useMediaQuery(["(max-width: 48rem)"]);

  return (
    <Dialog.Root
      size={isMobile ? "full" : "xl"}
      placement={"center"}
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
          <Dialog.Content>
            <Dialog.Header padding={"30px 36px 0px 36px"}>
              <Dialog.Title fontSize={"24px"}>Создание заявки</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body padding={"32px 36px 32px 36px"}>
              <form style={{ display: "flex", gap: "32px" }}>
                <Box flex={1}>
                  <Field.Root paddingBottom={"46px"}>
                    <Field.Label>Аптека</Field.Label>
                    <SelectWrap
                      placeholder="Выберите аптеку от которой исходит заявка"
                      rawData={pharmacyData.map((x) => ({
                        value: x.id,
                        label: x.address,
                      }))}
                      height={{ base: "42px", md: "48px" }}
                    />
                  </Field.Root>

                  <Field.Root paddingBottom={"16px"}>
                    <Field.Label>Категория заявки</Field.Label>
                    <SelectWrap
                      placeholder="Холодильники, кондиционеры или другое"
                      rawData={categoriesData.map((x) => ({
                        value: x.id,
                        label: x.name,
                      }))}
                    />
                  </Field.Root>

                  <Checkbox.Root value="warranty">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control borderRadius={"5px"} />
                    <Checkbox.Label fontSize={"14px"} fontWeight={"400"}>
                      Гарантийный случай?
                    </Checkbox.Label>
                  </Checkbox.Root>
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
                      placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
                      // _placeholder={{ color: "#B0B0B0" }}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Приоритет</Field.Label>
                    <SelectWrap
                      placeholder="влияет на эффективность, но не стопорит"
                      rawData={priorityData.map((x) => ({
                        value: x.id,
                        label: x.name,
                      }))}
                      height={{ base: "46px", md: "40px" }}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Описание проблемы</Field.Label>
                    <Textarea
                      height={"164px"}
                      resize={"none"}
                      placeholder="Кратко опишите проблему:

- что случилось?
- дата и время произошедшего?
- сколько длится проблема?
- насколько она влияет на вашу работу?"
                    />
                  </Field.Root>
                  <Field.Root>
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
              </form>
            </Dialog.Body>
            <Dialog.Footer
              justifyContent={"flex-start"}
              gap={"17px"}
              padding={"0 0 40px 36px"}
            >
              <Dialog.ActionTrigger asChild>
                <Button fontWeight={"400"} fontSize={"16px"}>
                  Создать заявку
                </Button>
              </Dialog.ActionTrigger>
              <Button
                fontWeight={"400"}
                fontSize={"16px"}
                borderColor={"black"}
                variant="outline"
              >
                Отмена
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <Button variant={"ghost"} translate={"-8px 16px"}>
                <Icon
                  icon={"ic:sharp-close"}
                  style={{ scale: 1.4, opacity: 0.5 }}
                />
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
