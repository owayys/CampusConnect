function createPixelGridMap(width: number, height: number, pixelSize: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width * pixelSize;
    canvas.height = height * pixelSize;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          ctx.fillStyle = `rgb(${x % 256}, ${y % 256}, ${(x + y) % 256})`;
          ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
      }
    }
    return canvas;
  }

function setPixelBlockColor(canvas: HTMLCanvasElement, startX: number, startY: number, endX: number, endY: number, color: string): void {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(startX, startY, endX - startX, endY - startY);
    }
  }
  

function setPixelColor(canvas: HTMLCanvasElement, x: number, y: number, color: string): void {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  
