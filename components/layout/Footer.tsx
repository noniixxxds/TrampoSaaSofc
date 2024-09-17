import {footerLinks} from "@/data/footerLinks";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <p>
                        Trampo oferece serviços de alta demanda para um grupo seleto de freelancers competentes.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                    
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 Trampo. Todos os direitos reservados.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {footerLinks.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;