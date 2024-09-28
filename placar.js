const placar = {
  largura:800,
  altura:70,
  cor:"black",
  pontos: 0,
  qtdPontos: 0,
  corTexto:"white",
  nomeJogo:"IFRJ Snake",
  desenhar(){
      canvasCtx.fillStyle =this.cor;
      canvasCtx.fillRect(0,0,this.largura,this.altura);
      canvasCtx.font = "20px Fantasy";
      canvasCtx.textAlign = "center";
      canvasCtx.textBaseline = "middle";
      canvasCtx.fillStyle = this.corTexto;
      canvasCtx.fillText(this.nomeJogo,400,30);
      canvasCtx.font = "16px Fantasy";
      canvasCtx.textAlign = "right";
      canvasCtx.fillText(this.qtdPontos + "ptos", 700,45);
      canvasCtx.fillText(cobra.vida + "vida(s)", 700,15);
  }
}