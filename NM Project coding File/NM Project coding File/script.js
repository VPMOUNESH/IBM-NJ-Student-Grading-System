function calculateGrade() {
            const name = document.getElementById('studentName').value.trim();
            const marks = parseFloat(document.getElementById('marks').value);
            const resultDiv = document.getElementById('result');

            // Reset previous result styling
            resultDiv.className = 'result';
            
            if (name === '' || isNaN(marks)) {
                resultDiv.innerHTML = `
                    <div class="grade-icon"><i class="fas fa-exclamation-triangle" style="color: #f48c06;"></i></div>
                    <div>Please enter both name and valid marks!</div>
                `;
                resultDiv.style.display = 'block';
                return;
            }

            if (marks < 0 || marks > 100) {
                resultDiv.innerHTML = `
                    <div class="grade-icon"><i class="fas fa-exclamation-circle" style="color: #f72585;"></i></div>
                    <div>Marks must be between 0 and 100!</div>
                `;
                resultDiv.style.display = 'block';
                return;
            }

            let grade = '';
            let icon = '';
            let message = '';
            
            if (marks >= 90) {
                grade = 'A+';
                icon = 'fas fa-star';
                message = 'Outstanding performance!';
            } else if (marks >= 80) {
                grade = 'A';
                icon = 'fas fa-trophy';
                message = 'Excellent work!';
            } else if (marks >= 70) {
                grade = 'B';
                icon = 'fas fa-award';
                message = 'Good job!';
            } else if (marks >= 60) {
                grade = 'C';
                icon = 'fas fa-thumbs-up';
                message = 'Satisfactory performance';
            } else if (marks >= 50) {
                grade = 'D';
                icon = 'fas fa-check-circle';
                message = 'Needs improvement';
            } else {
                grade = 'F';
                icon = 'fas fa-exclamation-triangle';
                message = 'Needs significant improvement';
            }

            resultDiv.innerHTML = `
                <div class="grade-icon"><i class="${icon}"></i></div>
                <div>${name} scored <strong>${marks}</strong> marks</div>
                <div>Grade: <strong>${grade}</strong></div>
                <div class="grade-details">${message}</div>
            `;
            
            resultDiv.classList.add(`grade-${grade.replace('+', 'plus')}`);
            resultDiv.style.display = 'block';
            resultDiv.classList.add('pulse');
            
            // Remove pulse animation after it completes
            setTimeout(() => {
                resultDiv.classList.remove('pulse');
            }, 500);
        }

        // Allow pressing Enter to calculate grade
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                calculateGrade();
            }
        });

        // Add focus effects to inputs
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });