import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      {/* 📐 Rejilla responsiva: Formulario a la izquierda, LinkedIn a la derecha */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full max-w-5xl mx-auto mt-6">
        
        {/* Columna del Formulario (Ocupa 2 espacios) */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>

        {/* Columna de LinkedIn (Ocupa 1 espacio) */}
        <div className="md:col-span-1 flex flex-col justify-start">
          <div className="rounded-xl border bg-card p-8 text-center shadow-sm flex flex-col justify-center items-center gap-6 min-h-[340px]">
            
            {/* Icono de LinkedIn con pulso elegante */}
            <div className="rounded-full bg-blue-500/10 p-4 text-blue-600 dark:text-blue-400 animate-pulse">
              <Icons.linkedin className="h-10 w-10" />
            </div>
            
            {/* Textos informativos */}
            <div className="space-y-2">
              <h3 className="font-heading text-2xl tracking-tight">
                Prefer to connect directly?
              </h3>
              <p className="text-muted-foreground text-sm max-w-[240px] mx-auto leading-relaxed">
                Follow my professional updates, QA methodologies, and connect with me on LinkedIn.
              </p>
            </div>

            {/* Botón de Acción con el color oficial de LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/brian-duarte-qa-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full gap-2 font-medium shadow-md hover:shadow-lg bg-[#0077b5] hover:bg-[#006294] text-white transition-all hover:-translate-y-0.5 duration-200"
              )}
            >
              <Icons.linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Link>

          </div>
        </div>

      </div>
    </PageContainer>
  );
}