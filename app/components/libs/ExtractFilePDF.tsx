

import * as pdfjsLib from 'pdfjs-dist'; 

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export async function extractPdfText(file:File) {

  
  
    
    const arrayBuffer = await file.arrayBuffer();
    try {
      
      const carregandoPdf = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await carregandoPdf.promise;
      
      let textoCompleto = '';
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const pagina = await pdf.getPage(i);
        const conteudoTexto = await pagina.getTextContent();
        
        
        const textoDaPagina = conteudoTexto.items
  .filter((item) => 'str' in item)
  .map((item) => (item as { str: string }).str)
  .join(' ');
        textoCompleto += `\n--- Página ${i} ---\n` + textoDaPagina;
      }
    return textoCompleto;
     
  } catch (erro) {
    console.error("Erro ao ler o PDF:", erro);
    throw new Error("Não foi possível ler este arquivo PDF.");
  }
}

