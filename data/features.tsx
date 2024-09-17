import {HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon} from "@radix-ui/react-icons";
import {Handshake} from "lucide-react";

export const features = [
    {
        title: "Rápido e confiável",
        description: "Nós fornecemos um serviço rápido e confiável aos nossos clientes. Nossa equipe está sempre pronta para ajudar você com qualquer problema que você possa ter.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "Personalizável",
        description: "Nosso serviço é altamente personalizável. Você pode escolher o esquema de cores e outras opções que melhor atendem às suas necessidades.",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "Seguro",
        description: "Nosso serviço é projetado para ser amigável ao usuário. Você pode navegar facilmente pelo aplicativo e encontrar o que precisa.",
        icon: <Handshake className="w-6 h-6"/>,
    },
];