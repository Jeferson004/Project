// For big screen pagination
//const pageNames = ["Home.html", "Merchant.html", "Careers.html","Home.html", "Merchant.html", "Careers.html","Home.html", "Merchant.html", "Careers.html", "Merchant.html"];
// const totalPages = pageNames.length;
const pages = document.getElementById('pages');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const totalPages = 10;
let currentPage = 1;

function generatePagination() {
    pages.innerHTML = '';

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            createPageLink(i);
        }
    } 
    
    else {
        if (currentPage <= 3) {
            for (let i = 1; i <= 3; i++) {
                createPageLink(i);
            }

            createEllipsis();

            for (let i = totalPages - 2; i <= totalPages; i++) {
                createPageLink(i);
            }
        } 
        
        else if (currentPage >= totalPages - 2) {
            for (let i = 1; i <= 3; i++) {
                createPageLink(i);
            }
            
            createEllipsis();

            for (let i = totalPages - 2; i <= totalPages; i++) {
                createPageLink(i);
            }
        } 
        
        else {
            createPageLink(1);

            createEllipsis();

            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                createPageLink(i);
            }

            createEllipsis();

            createPageLink(totalPages);
        }
    }

    updatePageStyles();
}

function createPageLink(page) {
    const link = document.createElement('a');
    link.textContent = page;
    link.href = '#';  //pageNames[page - 1]
    link.addEventListener('click', () => {
        currentPage = page;
        generatePagination();
    });
    pages.appendChild(link);
}

function createEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.textContent = '...';
    pages.appendChild(ellipsis);
}

function updatePageStyles() {
    const pageLinks = pages.getElementsByTagName('a');
    for (let i = 0; i < pageLinks.length; i++) {
        if (parseInt(pageLinks[i].textContent) === currentPage) {
            pageLinks[i].classList.add('active');
        } else {
            pageLinks[i].classList.remove('active');
        }
    }
}

prev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        generatePagination();
    }
});

next.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        generatePagination();
    }
});

generatePagination();



// For small screen pagination
const smallpaginationpages = document.getElementById('small-pagination-pages');

function updatePaginationDisplay() {
    smallpaginationpages.textContent = `Page ${currentPage} of ${totalPages}`;
}

SmallPaginationPrev.addEventListener('click', ()=> {
    if (currentPage > 1) {
        currentPage--;
        updatePaginationDisplay();
    }
});

SmallPaginationNext.addEventListener('click', ()=> {
    if (currentPage < totalPages) {
        currentPage++;
        updatePaginationDisplay();
    }
});

updatePaginationDisplay();


