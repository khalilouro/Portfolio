document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('valisp-terminal');
    const input = document.getElementById('terminal-input');
    const typingArea = document.getElementById('terminal-typing');
    const history = document.getElementById('terminal-history');

    // Focus hidden input when terminal is clicked
    terminal.addEventListener('click', () => {
        input.focus();
    });

    // Update visible typing area as user types
    input.addEventListener('input', () => {
        // Use non-breaking space for empty input to maintain line height
        typingArea.textContent = input.value.replace(/ /g, '\u00A0');
    });

    // Handle command execution on Enter
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            if (command) {
                // Add command to history
                const line = document.createElement('div');
                line.className = 'terminal-line';
                line.innerHTML = `<span class="prompt">vaλisp></span><span>${command.replace(/ /g, '&nbsp;')}</span>`;
                history.appendChild(line);

                // Simulated response
                const response = document.createElement('div');
                response.className = 'system-msg';
                response.style.color = '#27c93f';

                if (command === '(+ 1 2)') {
                    response.textContent = '3';
                } else if (command === 'help') {
                    response.textContent = 'Commandes disponibles : (+ x y), help, clear, hello';
                } else if (command === 'clear') {
                    history.innerHTML = '';
                    response.textContent = '';
                } else if (command.toLowerCase() === 'hello') {
                    response.textContent = 'Bonjour ! Prêt à interpréter du Lisp ?';
                } else {
                    response.textContent = `eval: ` + command;
                }

                if (response.textContent) {
                    history.appendChild(response);
                }

                // Reset input and scroll
                input.value = '';
                typingArea.textContent = '';
                terminal.scrollTop = terminal.scrollHeight;
            }
        }
    });
});