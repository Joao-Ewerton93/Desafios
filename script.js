function resolverEnigma() {
      const input = document.getElementById("entrada").value;
      const dicas = input.split(',').map(n => parseInt(n.trim()));
      let senha = -Infinity;
      let log = '';

      for (let i = 0; i < dicas.length; i++) {
        for (let j = i + 1; j < dicas.length; j++) {
          for (let k = j + 1; k < dicas.length; k++) {
            const a = dicas[i], b = dicas[j], c = dicas[k];
            const aux = a * b * c;
            log += `🔢 ${a} × ${b} × ${c} = ${aux}\n`;
            if (aux > senha) {
              senha = aux;
              log += `✅ Nova senha encontrada: ${senha}\n\n`;
            } else {
              log += `⏭️ Próxima tentativa...\n\n`;
            }
          }
        }
      }

      log += `🔐 Senha final do cofre: ${senha}`;
      document.getElementById("resultado").textContent = log;
    }