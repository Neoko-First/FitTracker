import {
  Droplets,
  Dumbbell,
  Flame,
  Scale,
  SlidersHorizontal,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type MacroPresetId =
  | "maintien"
  | "prise-masse"
  | "seche"
  | "force"
  | "endurance"
  | "cetogene"
  | "custom";

export type MacroPreset = {
  id: MacroPresetId;
  label: string;
  description: string;
  icon: LucideIcon;
  // null pour le preset "custom" (pas de valeurs imposées)
  protein: number | null;
  fat: number | null;
  carbs: number | null;
};

export const MACRO_PRESETS: MacroPreset[] = [
  {
    id: "maintien",
    label: "Maintien",
    description: "Répartition équilibrée",
    icon: Scale,
    protein: 30,
    fat: 30,
    carbs: 40,
  },
  {
    id: "prise-masse",
    label: "Prise de masse",
    description: "Surplus, glucides élevés",
    icon: TrendingUp,
    protein: 25,
    fat: 25,
    carbs: 50,
  },
  {
    id: "seche",
    label: "Sèche",
    description: "Déficit, protéines élevées",
    icon: Flame,
    protein: 40,
    fat: 25,
    carbs: 35,
  },
  {
    id: "force",
    label: "Force",
    description: "Performances & récupération",
    icon: Dumbbell,
    protein: 35,
    fat: 25,
    carbs: 40,
  },
  {
    id: "endurance",
    label: "Endurance",
    description: "Glucides dominants",
    icon: Zap,
    protein: 20,
    fat: 20,
    carbs: 60,
  },
  {
    id: "cetogene",
    label: "Cétogène",
    description: "Lipides dominants",
    icon: Droplets,
    protein: 25,
    fat: 65,
    carbs: 10,
  },
  {
    id: "custom",
    label: "Personnalisé",
    description: "Votre répartition libre",
    icon: SlidersHorizontal,
    protein: null,
    fat: null,
    carbs: null,
  },
];
