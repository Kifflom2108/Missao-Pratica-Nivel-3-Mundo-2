import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  { codEditora: 1, nome: 'Editora DarkSide Books' },
  { codEditora: 2, nome: 'Editora Wish' },
  { codEditora: 3, nome: 'Editora Draco' },
  { codEditora: 4, nome: 'Editora Estronho' },
  { codEditora: 5, nome: 'Editora Morro Branco' },
];

export default class ControleEditora {
  public getNomeEditora(codEditora: number): string {
    if (!Number.isInteger(codEditora)) {
      throw new Error('O código da editora deve ser um número inteiro.');
    }
    const editora = editoras.find(item => item.codEditora == codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }

  public getEditoras(): Editora[] {
    return editoras;
  }
}
