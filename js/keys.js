const keyList = [
            "top rated mortgage in Texas", "reliable inventory management with bad credit",
            "medical malpractice in 2026 in Pennsylvania", "specialized business credit card in Ohio",
            "best rates for dental implants for families", "personal injury lawyer for seniors in Georgia",
            "specialized health insurance in New York", "physical therapy for seniors in North Carolina",
            "specialized CRM software in North Carolina", "best tax relief in Michigan",
            "affordable rehab center in Georgia", "affordable health insurance in New York",
            "cost of immigration consultant for seniors", "affordable cloud hosting in Ohio",
            "certified inventory management in 2026", "expert mortgage with bad credit",
            "best immigration consultant in Texas", "top rated cloud hosting in New York",
            "low interest mortgage in Pennsylvania", "debt consolidation in 2026 in North Carolina",
            "reliable CRM software in 2026", "medical malpractice for families in Pennsylvania",
            "legal advice for dental implants near me", "debt consolidation with bad credit in Michigan",
            "legal advice for business credit card for small business", "bankruptcy lawyer with bad credit in California",
            "health insurance with bad credit in North Carolina", "cost of immigration consultant for small business",
            "specialized debt consolidation in North Carolina", "specialized business credit card in North Carolina",
            "certified inventory management with bad credit", "specialized physical therapy in Michigan",
            "dental implants with bad credit in Texas", "health insurance with bad credit in Michigan",
            "physical therapy near me in Illinois", "debt consolidation for small business in New York",
            "specialized mortgage in New York", "best rates for physical therapy near me",
            "specialized tax relief in California", "affordable personal injury lawyer in North Carolina",
            "best rates for medical malpractice near me", "senior home care near me in Texas",
            "specialized payroll system in North Carolina"
        ];

        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }

        function formatLink(str) {
            const titleStr = toTitleCase(str);
            const query = titleStr.split(' ').join('+');
            return `search.html?q=${query}`;
        }

        function generateRSOC() {
            const shuffled = [...keyList].sort(() => 0.5 - Math.random());
            const containers = document.querySelectorAll('.rsoc-placeholder');
            let startIndex = 0;
            const size = 6;

            containers.forEach(container => {
                const selected = shuffled.slice(startIndex, startIndex + size);
                startIndex += size;
                container.innerHTML = ''; 
                selected.forEach(key => {
                    const title = toTitleCase(key);
                    const url = formatLink(key);
                    container.innerHTML += `
                        <a href="${url}" class="rsoc-item">
                            <div class="rsoc-text-content">
                                <span class="rsoc-arrow">&#10095;</span>
                                <span>${title}</span>
                            </div>
                            <span class="rsoc-arrow">&#10095;</span>
                        </a>`;
                });
            });
        }
        window.onload = generateRSOC;