import {
    SelectContent,
    SelectItem,
    SelectTrigger, SelectValueText, SelectRoot
} from "../components/ui/select";

import { createListCollection } from "@chakra-ui/react";

export function ServiceDropdown() {
    const services = createListCollection({
        items: [
            { label: "Cell Line Authentication", value: "placeholder" },
            { label: "DNA Fragment Analysis", value: "placeholder2" },
            { label: "DNA Normalization", value: "placeholder3" },
            { label: "DNA Quantification", value: "placeholder4" },
            { label: "Nanodroplet Generation", value: "placeholder5" },
            { label: "Nanopore Sequencing", value: "placeholder6" },
            { label: "Open Access Instruments", value: "placeholder7" },
            { label: "PCR Reaction Cleanup", value: "placeholder8" },
            { label: "Plasmid & Genomic DNA", value: "placeholder9" },
            { label: "Sanger Sequencing", value: "placeholder10" },
            { label: "Stem Cell Authentication", value: "placeholder11" },
            { label: "Stock Primers (Free)", value: "placeholder12" },
        ],
    });
    return (
        <SelectRoot collection={services} size="sm" className="text-black w-[200px] ml-[15px]" style={{ border: "1px solid black" }}>
            <SelectTrigger>
                <SelectValueText placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent className="text-black bg-white">
                {services.items.map((service) => (
                    <SelectItem item={service} key={service.value} className="text-black bg-white">
                        {service.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}


