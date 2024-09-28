class objetoJogo {
     constructor(args = []) {
          this.tamanho = 30;    
          this.x = Math.round(this.tamanho + (tela.largura - 2 * this.tamanho) * Math.random());
          this.y = Math.round(placar.altura + (tela.altura - 2 * this.tamanho) * Math.random());
  
          if (args.length >= 1)  this.tamanho = args[0];
          if (args.length >= 2)  this.x = args[1];
          if (args.length >= 3)  this.y = args[2];          
     }
  
     // Verifica colisão com o primeiro segmento da cobra (a cabeça)
     teveColisao(cobra) {
          const distX = this.x - cobra.corpo[0].x; // cobra.corpo[0] é a cabeça
          const distY = this.y - cobra.corpo[0].y;
  
          // Verifica colisão com base na distância entre o alimento e a cabeça da cobra
          if (Math.abs(distX) < cobra.tamanho && Math.abs(distY) < cobra.tamanho) {
              return true;
          }
  
          return false;
     }
  }
  