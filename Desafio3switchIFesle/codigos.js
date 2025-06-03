console.log("Interfaces de linha" )
console.log("A – Cmd ")
console.log("B – Terminal Linux ")
let pergunta1 = prompt("Escolha uma alternativa: ")
switch(pergunta1){
case "A":
console.log("dir Lista os arquivos e pastas diretório atual, cd Navega entre pastas, cd..
Volta para a pasta anterior, mkdir Cria uma nova pasta, rmdir Remove uma pasta vazia,
echo Exibe mensagens, ipconfig Exibe configurações de rede, ping Testa a
conectividade com outro host”)
break}
if(pergunta1 == "B" || pergunta1 == "Terminal Linux"){
console.log("ls Lista os arquivos e pastas do diretório, cd nome_da_pasta Entra na
pasta especificada, cd .. Volta uma pasta, touch arquivo.txt Cria um arquivo
vazio ou atualiza a data, cp origem destino Copia arquivos ou pastas, mv origem destino
Move ou renomeia arquivos, rm arquivo.txt Remove um arquivo, mkdir cria uma
nova pasta, rmdir Remove uma pasta se estiver vazia")
}
else{
console.log("Escolha uma das duas opções")
}
