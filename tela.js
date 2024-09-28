const tela = {
   largura:800,
   altura:400,
   imagemArq: "bosque -fundo png.webp",
   desenhar(){
      this.imagem = new Image();
      this.imagem.src = this.imagemArq;
      canvasCtx.drawImage(this.imagem, 0,70, this.largura, this.altura);
   }
}