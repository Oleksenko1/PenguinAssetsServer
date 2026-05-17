const musicAssets = [
    "Menu", "Gameplay", "Win", "Lose"
];

const sfxAssets = [
    "PenguinCollision", "Bounce", "Slime", "Explosion", 
    "Dash", "ButtonClick", "Purchase", "ChestRiser", 
    "ChestDrop", "Currency"
];

function createAssetCard(name, type) {
    const card = document.createElement('div');
    card.className = 'asset-card';
    
    const icon = type === 'Music' ? '🎵' : '🔊';
    const ext = '.mp3';
    
    card.innerHTML = `
        <div class="asset-icon">${icon}</div>
        <div class="asset-details">
            <h3>${name}</h3>
            <p>${name}${ext}</p>
        </div>
        <div class="asset-action">
            <button onclick="copyUrl('${type}', '${name}${ext}')" title="Copy File Path">🔗</button>
        </div>
    `;
    
    return card;
}

function copyUrl(type, filename) {
    const baseUrl = window.location.href.replace('index.html', '').replace(/\/$/, "");
    const fullUrl = `${baseUrl}/${type}/${filename}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
        // Create a temporary toast or visually indicate copy success
        alert(`Copied path to clipboard: \n${type}/${filename}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const musicGrid = document.getElementById('music-grid');
    const sfxGrid = document.getElementById('sfx-grid');

    musicAssets.forEach((asset, index) => {
        const card = createAssetCard(asset, 'Music');
        // Stagger animation delay slightly
        card.style.animationDelay = `${index * 0.05}s`;
        musicGrid.appendChild(card);
    });

    sfxAssets.forEach((asset, index) => {
        const card = createAssetCard(asset, 'SFX');
        card.style.animationDelay = `${index * 0.05}s`;
        sfxGrid.appendChild(card);
    });
});
