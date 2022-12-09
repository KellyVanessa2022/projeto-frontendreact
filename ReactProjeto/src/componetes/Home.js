import {
  Main2,
  Mae3,
  Img,
  ImgMais,
  TextCortados,
  ImgLinImg,
  Flextudo,
} from "./styles";
import { useState, useEffect } from "react";
import Carrinho from "./Carrinho";
import Filtro from "./Filtro";

function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Kit Astronauta",
      preco: 129.9,

      
      imagem: "https://a-static.mlcdn.com.br/800x560/kit-espacial-astronautas-com-figuras-e-veiculos-fun-f0024-4/toystorerj/f0024-4/14034680028163ce9c525e9c77f0d336.jpeg",
    },

    {
      id: 2,
      nome: "Kit Mochilas Feminina Escolar",
      preco: 199.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-escolar-mochila-com-carrinho-lancheira-estojo-astronauta-criarte/criartepresentescriativos/83d176bc87a211ecb0504201ac185055/cadc00e3c73011359b72693e9435e38f.jpeg",
    },

    {
      id: 3,
      nome: "kit Brinquedo Astronauta",
      preco: 99.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-astronauta-estacao-e-capsula-fun/magazineluiza/226772600/a59249e79d2f2a648b1fcdf08848ab7f.jpg",
    },

    {
      id: 4,
      nome: "Kit Berço Astronauta",
      preco: 239.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-berco-masculino-com-lateral-seguranca-bebe-astronauta-com-lencol-de-algodao-brucebaby-bordados/brucebabybordados/69df33c0fa9e11eb95494201ac185013/ca87f3e12264c806117ac11b9e9378fc.jpeg",
    },

    {
      id: 5,
      nome: "Kit Astronauta Articulado",
      preco: 159.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-astronauta-drone-espacial-missao-em-marte-f00814-fun/maisbaratobrinquedos2/7310183/b18d7533d3ffadf496b5d7cefbf0629b.jpeg",
    },

    {
      id: 6,
      nome: "Colcha Astronauta",
      preco: 139.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-edredom-plush-fofinho-infantil-dupla-face-dream-2-pecas-solteiro-astronauta-davi-enxovais/granmoratta/11641p/6fb0a4f887cde643db009a142d2ec701.jpeg",
    },

    {
      id: 7,
      nome: "Kit Estação Espacial",
      preco: 239.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-astronauta-estacao-espacial-missao-em-marte-f00811-fun/toystorerjii/f00811/5b05e4c324d985b216454f0f9770fd92.jpeg",
    },

    {
      id: 8,
      nome: "kit Quadros Espaciais",
      preco: 129.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/quadro-decorativo-kit-infantil-estrela-astronauta-foguete-quadros-a/quadrosamais/13333330742/deba567f8771ead9bc0fe611ae026b95.jpg",
    },

  

    {
      id: 10,
      nome: "Boneco Astronauta",
      preco: 149.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-astronautas-exploradores-do-espaco-barao/ciatoy/11850/a386cf03970bf4c7d8e88a934a3a7604.jpeg",
    },

    {
      id: 11,
      nome: "Almofadas Espaciais",
      preco: 99.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-4-almofadas-cheias-protecao-decoracao-berco-cama-infantil-astronauta-misatex/lojamisatex/0ca016640ae911edbce84201ac185079/d089f296681a611405bae1657beb1d1c.jpeg",
    },
    {
      id: 12,
      nome: "Ônibus e Roover Espacial",
      preco: 219.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-astronauta-onibus-e-rover-espacial-fun-toys/jcbrinquedos/18959/ece4d95f355b005c9ee11fb7c3543e3c.jpeg",
    },
    {
      id: 13,
      nome: "Kit Nave Espacial",
      preco: 189.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-astronauta-decoracao-festa-espaco-foguete-mesa-painel-decor-porto/decorporto/15191996792/5fc7353319e021a700a3f0d610d4f22a.jpg",
    },
    {
      id: 14,
      nome: "Kit Tripulante Espacial",
      preco: 289.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-estacao-espacial-com-luz-astronautas-e-veiculos-cidade-espacial-ref-45957-toyng/sandrapresentes/131999245p/fafae01b13710db39b8b59f1a0e84eed.jpeg",
    },
    {
      id: 15,
      nome: "Kit Astro Espacial",
      preco: 149.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/brinquedo-kit-espacial-astronauta-carrinho-foguete-satelite-team-rocket/presenteslw/14814616156/0bbcf8243b62f75f662dfe934ac7ab51.jpeg",
    },
    
    {
      id: 16,
      nome: "Kit Escolar Astronauta",
      preco: 199.9,
      

      imagem: "https://a-static.mlcdn.com.br/800x560/kit-mochila-infantil-rodinhas-foguete-astronauta-tam-g-menino-3d-alto-relevo-lancheira-termica-estojo-luxcel/lojaditudotem/8897-10767/cd31a7abfbf55d1476812aad00edad68.jpeg",
    },
  ];
  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");
  const [ordem, setOrdem] = useState("");

  const onChangeCarrinho = (event) => {
    setCarrinho(event.target.value);
  };

  const onChangeOrdem = (event) => {
    setOrdem(event.target.value);
  };

  //FUNÇÃO PARA COMPRA DE PRODUTOS NO CARRINHO
  const compraProduto = (produto) => {
    const novoCarrinho = [...carrinho];
    const produtoAdicionado = produto;

    const produtoExistente = novoCarrinho.find((produto) => {
      return produto.id === produtoAdicionado.id;
    });
    if (produtoExistente) {
      produtoExistente.quantidade++;
      produtoExistente.precototal =
        produtoExistente.quantidade * produtoExistente.preco;
    } else {
      novoCarrinho.push({
        ...produtoAdicionado,
        quantidade: 1,
        precototal: produtoAdicionado.preco,
      });
    }
    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    if (carrinho.length > 0) {
      const listaStringCarrinho = JSON.stringify(carrinho);
      localStorage.setItem("carrinho", listaStringCarrinho);
    }
  }, [carrinho]);

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (novoCarrinho !== null) {
      setCarrinho(novoCarrinho);
    }
  }, []);

  const somaTela = (produtos) => {
    produtos
      .filter((produto) => {
        return produto.nome.includes(pesquisa);
      })
      .filter((produto) => {
        return produto.preco >= valorMinimo;
      })
      .filter((produto) => {
        return valorMaximo ? produto.preco <= valorMaximo : produto;
      })
      .map((produto, index) => {
        return produto.length;
      });
  };
  return (
    <Flextudo>
      <Filtro
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
      />
      
      <Main2>
      <div className="boxcentral-topo">
          <div>
            <h3>Quantidade de Produtos:</h3>
            <p>{produtos.length} produtos</p>
          </div>
          <div>
            <select
              value={ordem}
              onChange={onChangeOrdem}
              className="boxcentral-topo-select"
            >
              <option value="">Ordenar por</option>
              <option value="Maior">Preço: do maior para o menor</option>
              <option value="Menor">Preço: do menor para o maior</option>
            </select>
          </div>
        </div>
        <Mae3>
            
          {produtos
            //Busca de produto pelo nome
            .filter((produto) => {
              return produto.nome.includes(pesquisa);
            })
            //filtrar produtos a partir do menor valor
            .filter((produto) => {
              return produto.preco >= valorMinimo;
            })
            //filtrar produtos a partir do menor valor
            .filter((produto) => {
              return valorMaximo ? produto.preco <= valorMaximo : produto;
            })
            //Ordenar do maior e do menor
            .sort((a, b) => {
              switch (ordem) {
                case "Maior":
                  if (a.preco < b.preco) {
                    return 1;
                  } else {
                    return -1;
                  }
                case "Menor":
                  if (a.preco < b.preco) {
                    return -1;
                  } else {
                    return 1;
                  }
              }
            })
            // Comando para renderizar todos os produtos da loja
            .map((produto, index) => {
              return (
                <div key={index}>
                  <Img src={produto.imagem} alt="Produto-Loja" />
                  <ImgMais className="imagemmais">
                    <h1>{produto.nome}</h1>

                    <span
                      onClick={() => compraProduto(produto)}
                      onChange={onChangeCarrinho}
                    >
                      <svg
                        width="40"
                        height="40"
                        class="aaaaa"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
                        <path d="M12 8.25v7.5"></path>
                        <path d="M15.75 12h-7.5"></path>
                      </svg>
                    </span>
                  </ImgMais>

                  <TextCortados className="textoscortados">
                    <ImgLinImg className="imglinimg">
                      <h2>R$ {produto.preco}0</h2>
                      
                    </ImgLinImg>
                    
                  </TextCortados>
                </div>
              );
            })}
        </Mae3>
      </Main2>
      <Carrinho cesta={carrinho} setCesta={setCarrinho} />
    </Flextudo>
  );
}

export default Home;
