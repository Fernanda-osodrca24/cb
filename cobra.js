const cobra = {
        corpo: [{ x: 100, y: 100 }], // Posição da cobra como um array de objetos
        tamanho: 20,
        taxaCrescimento: 1,
        cor: "purple",  // Cor inicial da cabeça
        cor2: "orange", // Cor da segunda metade da cobra
        direcao: 0, // 0 = direita, 10 = baixo, 10 = esquerda, 10= cima
        vida: 3,
        
        // Função para desenhar a cobra
        desenhar() {
            for (let i = 0; i < this.corpo.length; ++i) {
                canvasCtx.fillStyle = i > this.corpo.length / 2 ? this.cor2 : this.cor; // Mudança de cor na metade
                canvasCtx.fillRect(this.corpo[i].x, this.corpo[i].y, this.tamanho, this.tamanho);
            }
        },
    
        // Função para mover a cobra
        mover() {
            let novaCabeca;
    
            // Movendo a cabeça da cobra com base na direção
            switch (this.direcao) {
                case 0:  // Direita
                    novaCabeca = { x: this.corpo[0].x + this.tamanho, y: this.corpo[0].y };
                    break;
                case 90: // Baixo
                    novaCabeca = { x: this.corpo[0].x, y: this.corpo[0].y + this.tamanho };
                    break;
                case 180: // Esquerda
                    novaCabeca = { x: this.corpo[0].x - this.tamanho, y: this.corpo[0].y };
                    break;
                case 270: // Cima
                    novaCabeca = { x: this.corpo[0].x, y: this.corpo[0].y - this.tamanho };
                    break;
            }
    
            // Adiciona a nova cabeça no início do array
            this.corpo.unshift(novaCabeca);
    
            // Remove o último segmento da cobra, a menos que ela tenha crescido
            this.corpo.pop();
    
            // Verifica se a cobra colidiu com os limites da tela ou com ela mesma
            if (
                this.corpo[0].x >= tela.largura || this.corpo[0].x < 0 ||
                this.corpo[0].y >= tela.altura || this.corpo[0].y < 0 ||
                this.seComeu()
            ) {
                this.morrer();
            }
        },
    
        // Função para lidar com a "morte" da cobra
        morrer() {
            this.vida--;
            this.corpo = [{ x: 400, y: 260 }]; // Reinicia a posição da cobra
            if (this.vida == 2) this.cor = "hotpink"; // Muda a cor da cobra ao perder uma vida
            if (this.vida == 1) this.cor = "black"; // Muda a cor ao perder outra vida
        },
    
        // Função para crescer a cobra
        crescer() {
            for (let i = 0; i < this.taxaCrescimento; ++i) {
                const novaParte = { x: this.corpo[0].x, y: this.corpo[0].y }; // Cresce na posição atual da cabeça
                this.corpo.unshift(novaParte); // Adiciona a nova parte da cobra
            }
        },
    
        // Função para verificar se a cobra colidiu com ela mesma
        seComeu() {
            for (let i = 1; i < this.corpo.length; ++i) {
                if (this.corpo[i].x === this.corpo[0].x && this.corpo[i].y === this.corpo[0].y) {
                    return true; // Colisão detectada
                }
            }
            return false;
        }
    };
    