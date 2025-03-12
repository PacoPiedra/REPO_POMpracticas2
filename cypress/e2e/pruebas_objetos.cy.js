import TodoPage from '../support/objects/Tareas';

describe('Pruebas Métodos', () => {
  const todoPage = new TodoPage();


  beforeEach(() => {
    todoPage.visitarPagina();
  });



  it('Agregar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
  })

  it('Agregar mas de una tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.agregarTarea('Sacar al perro')
    todoPage.agregarTarea('Ir al gym')
  })

  
  it('Borrar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.borrarTarea('Hacer la compra')
  })


  it('Marcar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.marcarTarea('Hacer la compra')
  })
})