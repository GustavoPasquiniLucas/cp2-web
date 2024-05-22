function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;

    let resultado;

    switch (operacao) {
        case "+":
            resultado = somar(num1, num2);
            break;
        case "-":
            resultado = subtrair(num1, num2);
            break;
        case "*":
            resultado = multiplicar(num1, num2);
            break;
        case "/":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
        setTimeout(() => {
          do {
            continuar = prompt("Deseja realizar outro cálculo? (Sim/Não)").toLowerCase();
            if (continuar !== "sim" && continuar !== "não") {
              alert("Resposta inválida. Digite 'Sim' ou 'Não'.");
            }
          } while (continuar !== "sim" && continuar !== "não");
      
          if (continuar === "não") {
            window.location.href = "https://google.com/";
          }
        }, 300);
      }
      function IR(a) {
        if (a < 2800){
            return 0;
        }
        else if (a < 5000){
            return  a*15/100;
        }
        else
        {
            return a*27/100;
        }
    }
    
    function FGTS(a){
        return a*8/100;
    }
    
    function INSS(a){
        return a*20/100;
    }
    
    function calcula_salario(){
        const bruto = parseFloat(document.getElementById('salario').value);
        let salario = bruto - (IR(bruto) + FGTS(bruto)+ INSS(bruto));
        let continuar;
    
        document.getElementById('res_salario').innerHTML = `Salário líquido = ${salario}`;
    
        setTimeout(() => {
            do {
              continuar = prompt("Deseja realizar outro cálculo? (Sim/Não)").toLowerCase();
              if (continuar !== "sim" && continuar !== "não") {
                alert("Resposta inválida. Digite 'Sim' ou 'Não'.");
              }
            } while (continuar !== "sim" && continuar !== "não");
        
            if (continuar === "não") {
              window.location.href = "https://google.com/";
            }
          }, 300);
    }



let votos = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
};

function contarVotos(candidato) {
    votos[candidato]++;
    exibirResultado();
}

function exibirResultado() {
    let html = "";
    for (let candidato in votos) {
        html += `Candidato ${candidato}: ${votos[candidato]} votos<br>`;
    }
    document.getElementById("res_votacao").innerHTML = html;
    setTimeout(() => {
        do {
          continuar = prompt("Deseja realizar outro voto? (Sim/Não)").toLowerCase();
          if (continuar !== "sim" && continuar !== "não") {
            alert("Resposta inválida. Digite 'Sim' ou 'Não'.");
          }
        } while (continuar !== "sim" && continuar !== "não");
    
        if (continuar === "não") {
            alert("VOTAÇÃO ENCERRADA");
            window.location.href = "https://www.google.com";
          }
      }, 300);
}

function simularVotação() {
    let form = document.getElementById("votação");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let candidato = document.querySelector('input[name="candidato"]:checked').value;
        contarVotos(candidato);
    });
}
simularVotação();


