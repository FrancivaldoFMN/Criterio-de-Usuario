checkCondition();


function checkCondition(){

	try{
		
		var log = 'Teste Usuário' + '\n';
		
		log += 'Fez consulta: ' + gr + '\n'; 

		var user = gs.getUserID(); 
		log += 'User ID logado: ' + user + '\n';

		if (user == '4bf6f1aadb055910763e140314961910')
		{
			
			log += 'Entrou' + '\n';

			return true;
		}

		else{

			log += 'Não entrou Else' + '\n';
			return false;
		}
	}
	catch(ex) {
		log += 'ERRO: \n';
		log += ex.message + '\n';

	}
	finally{
		log += '*****FIM*****\n';
		gs.info(log);
	}
}
