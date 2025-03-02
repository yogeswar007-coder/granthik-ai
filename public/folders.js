const apiBaseURL = "https://748d-34-71-217-174.ngrok-free.app"; // Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ueXdwdGR1Y3JvdGRsbm1vYmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NzM3MTYsImV4cCI6MjA1NjM0OTcxNn0.x7pk3WuhLSUbRvZdyGAumGS751jMt2jz4vbblz6Q0lA"; // Supabase key
const supabase = supabase.createClient(apiBaseURL, supabaseKey);

async function fetchFolders(userId) {
    try {
        const { data, error } = await supabase
            .from('files')  // Your Supabase table
            .select('*')
            .eq('user_id', userId); // Filter files by user_id
        
        if (error) {
            console.error("Error fetching files:", error);
        } else {
            displayFolders(data);
        }
    } catch (error) {
        console.error("Error fetching files:", error);
    }
}

function displayFolders(files) {
    const container = document.getElementById("foldersContainer");
    container.innerHTML = "";
    
    const grouped = files.reduce((acc, file) => {
        acc[file.category] = acc[file.category] || [];
        acc[file.category].push(file);
        return acc;
    }, {});

    for (const category in grouped) {
        const folderDiv = document.createElement("div");
        folderDiv.classList.add("folder");
        folderDiv.innerHTML = `<h3>${category}</h3>`;
        
        grouped[category].forEach(file => {
            const fileDiv = document.createElement("div");
            fileDiv.innerHTML = `📄 <a href="${file.url}" target="_blank">${file.name}</a>`;
            folderDiv.appendChild(fileDiv);
        });

        container.appendChild(folderDiv);
    }
}

document.getElementById("searchBox").addEventListener("input", function () {
    const query = this.value.trim();

    if (query.length > 2) {
        searchFiles(query);  // Implement the search function
    } else {
        const userId = new URLSearchParams(window.location.search).get('user');
        fetchFolders(userId);
    }
});

async function searchFiles(query) {
    const userId = new URLSearchParams(window.location.search).get('user');
    const { data, error } = await supabase
        .from('files')
        .select('*')
        .ilike('name', `%${query}%`) // Adjust to search by name or category
        .eq('user_id', userId);

    if (error) {
        console.error("Search error:", error);
    } else {
        displayFolders(data);
    }
}

// On page load, fetch the files for the current user
const userId = new URLSearchParams(window.location.search).get('user');
fetchFolders(userId);
