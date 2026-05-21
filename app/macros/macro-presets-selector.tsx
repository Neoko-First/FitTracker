"use client";

import { cn } from "@/lib/utils";
import type { MacroPreset, MacroPresetId } from "./macro-presets";
import { MACRO_PRESETS } from "./macro-presets";

type Props = {
    selected: MacroPresetId;
    onSelect: (preset: MacroPreset) => void;
};

export function MacroPresetsSelector({ selected, onSelect }: Props) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {MACRO_PRESETS.map((preset) => {
                const Icon = preset.icon;
                const isActive = selected === preset.id;
                return (
                    <button
                        key={preset.id}
                        onClick={() => onSelect(preset)}
                        className={cn(
                            "flex flex-col gap-1 p-3 rounded-lg border text-left transition-all cursor-pointer",
                            "hover:border-primary/50 hover:bg-muted/50",
                            isActive ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border",
                            preset.id === "custom" && "col-span-2"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <Icon className={cn("size-3.5 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} />
                            <span className={cn("text-xs font-semibold leading-tight", isActive ? "text-primary" : "text-foreground")}>
                                {preset.label}
                            </span>
                        </div>
                        {preset.protein !== null ? (
                            <div className="flex gap-1 text-xs">
                                <span className="text-[10px] text-blue-500 font-medium">{preset.protein}%P</span>
                                <span className="text-[10px] text-yellow-500 font-medium">{preset.fat}%L</span>
                                <span className="text-[10px] text-green-500 font-medium">{preset.carbs}%G</span>
                            </div>
                        ) : (
                            <span className="text-[10px] text-muted-foreground">{preset.description}</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
