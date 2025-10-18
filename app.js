const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('search');
const viewerModal = document.getElementById('viewerModal');
const pdfFrame = document.getElementById('pdfFrame');
const viewerTitle = document.getElementById('viewerTitle');
const closeViewer = document.getElementById('closeViewer');

// 📚 Lista estática de libros
const books = [
  {
    titulo: "Matemáticas 6to",
    autor: "Editorial Escolar",
    materia: "Matemáticas",
    archivo: "books/matematicas-6.pdf"
  },
  {
    titulo: "Ciencias Naturales",
    autor: "Editorial X",
    materia: "Ciencias",
    archivo: "books/ciencias.pdf"
  },
  {
    titulo: "Historia de Bolivia",
    autor: "Ministerio de Educación",
    materia: "Historia",
    archivo: "books/historia.pdf"
  }
];

// 🧩 Renderizar libros en pantalla
function renderBooks(list) {
  booksGrid.innerHTML = '';

  if (list.length === 0) {
    booksGrid.innerHTML = '<p>No se encontraron libros.</p>';
    return;
  }

  list.forEach(book => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${book.titulo}</h3>
      <p><strong>Autor:</strong> ${book.autor}</p>
      <p><strong>Materia:</strong> ${book.materia}</p>
      <div class="acciones">
        <button class="btn-ver" onclick="verLibro('${book.archivo}', '${book.titulo}')">📖 Ver PDF</button>
        <a class="btn-descargar" href="${book.archivo}" download>⬇️ Descargar</a>
      </div>
    `;
    booksGrid.appendChild(card);
  });
}

// 🪄 Ver libro en visor (modal)
function verLibro(file, title) {
  if (!file || file.trim() === "") {
    alert("⚠️ Este libro aún no tiene PDF disponible.");
    return;
  }

  viewerTitle.textContent = title;
  pdfFrame.src = file;
  viewerModal.classList.remove('hidden');
}

// ❌ Cerrar visor
closeViewer.addEventListener('click', () => {
  pdfFrame.src = '';
  viewerModal.classList.add('hidden');
});

// 🔍 Buscar libros
searchInput.addEventListener('input', e => {
  const query = e.target.value.toLowerCase();
  const filtered = books.filter(b => 
    `${b.titulo} ${b.autor} ${b.materia}`.toLowerCase().includes(query)
  );
  renderBooks(filtered);
});

// 🚀 Inicializar
renderBooks(books);
