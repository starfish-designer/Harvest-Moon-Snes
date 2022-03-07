// JavaScript Document
function exibe(varNomeDiv) {

	objAjudaMenu = document.getElementById(varNomeDiv);
	objAjudaMenu.style.display = "block";
}

function oculta(varNomeDiv){

		objAjudaMenu = document.getElementById(varNomeDiv);
	    objAjudaMenu.style.display = "none";
}

function escrevedata() {

	objData = new Date(); // Cria o objeto de manipulação de data.
	dd = objData.getDate(); // Captura o dia.
	mm = objData.getMonth(); // Captura o Mês.
	aa = objData.getFullYear(); // Captura o ano com quatro digitos.
	semana = objData.getDay(); // Captura o dia da semana.
	
	vetMes = new Array(); // Cria um Vetor.
	
	vetMes[0] = " Janeiro ";
	vetMes[1] = " Fevereiro ";
	vetMes[2] = " Mar&ccedil;o ";
	vetMes[3] = " Abril ";
	vetMes[4] = " Maio ";
	vetMes[5] = " Junho ";
	vetMes[6] = " Julho ";
	vetMes[7] = " Agosto ";
	vetMes[8] = " Setembro ";
	vetMes[9] = " Outubro ";
	vetMes[10] = " Novembro ";
	vetMes[11] = " Dezembro "

	vetSemana = new Array(); // Cria vetor da semana.
	
	vetSemana[0] = " Domingo "
	vetSemana[1] = " Segunda-Feira "
	vetSemana[2] = " Ter&ccedil;a-Feira "
	vetSemana[3] = " Quarta-Feira "
	vetSemana[4] = " Quinta-Feira "
	vetSemana[5] = " Sexta-Feira "
	vetSemana[6] = " S&aacute;bado "
	
	vetDia = new Array(); // Cria vetor dia.
	
	vetDia[0] = " 0 "
	vetDia[1] = " 1 "
	vetDia[2] = " 2 "
	vetDia[3] = " 3 "
	vetDia[4] = " 4 "
	vetDia[5] = " 5 "
	vetDia[6] = " 6 "
	vetDia[7] = " 7 "
	vetDia[8] = " 8 "
	vetDia[9] = " 9 "
	vetDia[10] = " 10 "
	vetDia[11] = " 11 "
	vetDia[12] = " 12 "
	vetDia[13] = " 13 "
	vetDia[14] = " 14 "
	vetDia[15] = " 15 "
	vetDia[16] = " 16 "
	vetDia[17] = " 17 "
	vetDia[18] = " 18 "
	vetDia[19] = " 19 "
	vetDia[20] = " 20 "
	vetDia[21] = " 21 "
	vetDia[22] = " 22 "
	vetDia[23] = " 23 "
	vetDia[24] = " 24 "
	vetDia[25] = " 25 "
	vetDia[26] = " 26 "
	vetDia[27] = " 27 "
	vetDia[28] = " 28 "
	vetDia[29] = " 29 "
	vetDia[30] = " 30 "
	vetDia[31] = " 31 "
	
	//document.write("Recife, " + dd + "/" + mm + "/" + aa); // Escreve a data no formato: Recife, dia/mês/ano.
	document.write(vetSemana[semana]+"," + vetDia[dd] + " de " + vetMes[mm] + " de " + aa + " - ");
}