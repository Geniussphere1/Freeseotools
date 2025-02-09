// Navigation and Search
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Search Functionality
    const tools = [
        { name: 'Keyword Density Checker', url: 'tools/keyword-density.html' },
        { name: 'Meta Tag Generator', url: 'tools/meta-generator.html' },
        { name: 'URL Encoder/Decoder', url: 'tools/url-encoder.html' }
    ];

    const searchBar = document.querySelector('.search-bar');
    const searchResults = document.querySelector('.search-results');

    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            searchResults.innerHTML = '';

            if (searchTerm.length > 0) {
                const filteredTools = tools.filter(tool => 
                    tool.name.toLowerCase().includes(searchTerm)
                );

                filteredTools.forEach(tool => {
                    const resultItem = document.createElement('a');
                    resultItem.href = tool.url;
                    resultItem.className = 'search-result-item';
                    resultItem.textContent = tool.name;
                    searchResults.appendChild(resultItem);
                });
                
                searchResults.style.display = filteredTools.length ? 'block' : 'none';
            } else {
                searchResults.style.display = 'none';
            }
        });
    }
});
