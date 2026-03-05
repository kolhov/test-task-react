import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
  defineSlotRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "400",
  },
  variants: {
    size: {
      sm: { fontSize: "14px", height: "32px" },
      md: { fontSize: "16px" },
    },
  },
});

const labelRecipe = defineSlotRecipe({
  slots: ["label"],
  base: {
    label: {
      fontWeight: "400",
      fontSize: "12px",
      pb: "8px",
    },
  },
});

const placeholderRecipe = defineRecipe({
  base: {
    _placeholder: {
      color: "#B0B0B0",
      fontWeight: "400",
      fontSize: "14px",
    },
  },
});

const config = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
      input: placeholderRecipe,
    },
    slotRecipes: {
      field: labelRecipe,
    },
  },
});

export default createSystem(defaultConfig, config);
