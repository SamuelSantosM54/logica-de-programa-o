mkdir experimentos
su
cd experimentos
mkdir teste1 teste2 teste3
echo "Primeiro teste" > teste/arquivo1.txt
echo "Segundo teste" > teste2/arquivo2.txt
echo "Terceiro teste" > teste3/arquivo3.txt
cd ..
ls experimentos
cd experimentos
ls teste1/*.txt
cp teste1/arquivo1.txt teste2/
mv teste2/arquivo2.txt teste3/
rm teste3/arquivo3.txt
mv teste2 teste_backup
echo "Backup de teste" > teste_backup/arquivo_backup.txt
cat teste_backup/arquivo_backup.txt
echo "Relatorio dos testes" > relatorio.txt
cat relatorio.txt
rm -r teste_backup/
mkdir novo_diretorio
mv teste1/* novo_diretorio/
rm -r experimentos
