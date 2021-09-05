import {Video, Imagens} from '../../components/Main'
export const Galeria = () => {
	return(
		<>		
			<h1 className="mb-4 text-center mt-5">
	            Minha
	            <span className="text-primary"> Galeria</span>
	        </h1>
			<div className="container espaco mb-5">
				<div className="row mb-5">
					<Imagens bookmark="#Bookmark" bookmarkid="Bookmark" imagem="images/imagem1.jpg" titulo="Eu"></Imagens>
					<Imagens bookmark="#Bookmark2" bookmarkid="Bookmark2" imagem="images/imagem2.jpg" titulo="Eu com minha mãe e meu padrasto"></Imagens>
					<Imagens bookmark="#Bookmark3" bookmarkid="Bookmark3" imagem="images/imagem3.jpg" titulo="Eu com meu pai"></Imagens>
				</div>
				<div className="row">
					<Video titulo="Trabalho de Filosofia" video="y4a7-vzUKjU" desc="O video acima foi gravado e editado por mim no 3° ano do Ensino médio com meus colegas para o trabalho de filosiva solicitado pelo professor."></Video>
					<Video titulo="Curso Sistemas 1" video="Ao1FqiUeog4" desc="O video acima foi gravado pelo professor cordenador do meu curso de Graduação na área de Sistemas para Internet"></Video>
					<Video titulo="Melhor App para Estudo" video="5pM4ES-v6Ls" desc="O video acima FAZ parte dos canais que eu sigo e assisto nas horas vagas, outras categorias incluem canais de tecnologia e games."></Video>
				</div>
			</div>
		</>
	)
}