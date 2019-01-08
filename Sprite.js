function SpriteBG(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgbg, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteBola(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgbola, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpritePerdeu(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgperdeu, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteJogar(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgjogar, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteScore(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgscore, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteChao(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgchao, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteObs1(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgobs1, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteObs1(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgobs2, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteObs2(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgobs2, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteObs3(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgobs3, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteObs4(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgobs4, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteObs5(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgobs5, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}

function SpriteVida(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(imgvida, this.x, this.y,
                this.largura, this.altura,
                xCanvas, yCanvas,
                this.largura, this.altura);
    }
}


var
        spriteBg = new SpriteBG(340, 100, 600, 600),
        spriteBola = new SpriteBola(0, 0, 110, 115),
        spritePerdeu = new SpritePerdeu(0, 0, 200, 200),
        spriteJogar = new SpriteJogar(0, 0, 200, 200),
        spriteChao = new SpriteChao(0, 0, 1200, 100),
        spriteScore = new SpriteScore(0, 0, 357, 205),
        spriteobs1 = new SpriteObs1(0, 0, 50, 120),
        spriteobs2 = new SpriteObs1(0, 0, 50, 120),
        spriteobs3 = new SpriteObs1(0, 0, 50, 120),
        spriteobs4 = new SpriteObs1(0, 0, 50, 120),
        spriteobs5 = new SpriteObs1(0, 0, 50, 120);
		spritevida = new SpriteVida(0, 0, 60, 60);
