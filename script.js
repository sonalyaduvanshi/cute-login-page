// ==========================
// PROGRESS BAR
// ==========================

const pb = document.getElementById("progressBar");

let width = 0;

const progress = setInterval(() => {

    width += Math.random() * 15;

    if (width >= 100) {

        width = 100;

        clearInterval(progress);

        setTimeout(() => {
            pb.style.opacity = "0";
        }, 500);
    }

    pb.style.width = width + "%";

}, 120);

// ==========================
// LOGIN / SIGNUP TAB SWITCH
// ==========================

function switchTab(tab){

    const loginPanel =
    document.getElementById("panel-login");

    const signupPanel =
    document.getElementById("panel-signup");

    const loginBtn =
    document.getElementById("tab-login");

    const signupBtn =
    document.getElementById("tab-signup");

    loginPanel.classList.toggle(
        "active",
        tab === "login"
    );

    signupPanel.classList.toggle(
        "active",
        tab === "signup"
    );

    loginBtn.classList.toggle(
        "active",
        tab === "login"
    );

    signupBtn.classList.toggle(
        "active",
        tab === "signup"
    );
}

// ==========================
// PASSWORD SHOW / HIDE
// ==========================

function togglePw(id, icon){

    const input =
    document.getElementById(id);

    if(input.type === "password"){

        input.type = "text";

        icon.textContent = "🙈";

    }else{

        input.type = "password";

        icon.textContent = "👁️";
    }
}

// ==========================
// PASSWORD STRENGTH
// ==========================

function checkStrength(value){

    let score = 0;

    if(value.length >= 8)
        score++;

    if(/[A-Z]/.test(value))
        score++;

    if(/[0-9]/.test(value))
        score++;

    if(/[^A-Za-z0-9]/.test(value))
        score++;

    const bars = [

        document.getElementById("sb1"),
        document.getElementById("sb2"),
        document.getElementById("sb3"),
        document.getElementById("sb4")

    ];

    const colors = [

        "#FCA5A5",
        "#FCD34D",
        "#6EE7B7",
        "#34D399"

    ];

    const labels = [

        "Weak 😟",
        "Fair 🙂",
        "Good 😊",
        "Strong 💪"

    ];

    bars.forEach((bar,index)=>{

        if(index < score){

            bar.style.background =
            colors[score - 1];

        }else{

            bar.style.background =
            "#FFD6E0";
        }
    });

    const label =
    document.getElementById(
        "strength-label"
    );

    if(value.length === 0){

        label.textContent =
        "Type password...";

        return;
    }

    label.textContent =
    labels[score - 1] || "Weak 😟";
}

// ==========================
// TOAST
// ==========================

function showToast(message){

    const toast =
    document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);
}

// ==========================
// SUBMIT HANDLER
// ==========================

function handleSubmit(type){

    if(type === "login"){

        showToast(
            "🐻 Welcome Back Cutie!"
        );

        return;
    }

    const pw =
    document.getElementById("su-pw").value;

    const confirmPw =
    document.getElementById("su-confirm").value;

    if(pw !== confirmPw){

        showToast(
            "❌ Passwords do not match!"
        );

        return;
    }

    if(pw.length < 6){

        showToast(
            "⚠️ Password too short!"
        );

        return;
    }

    showToast(
        "🎉 Account Created Successfully!"
    );
}

// ==========================
// KEYBOARD ACCESSIBILITY
// ==========================

document
.querySelectorAll(".tab-btn")
.forEach(btn=>{

    btn.addEventListener(
        "keydown",
        (e)=>{

            if(
                e.key === "Enter" ||
                e.key === " "
            ){

                btn.click();
            }
        }
    );
});