<script setup>


</script>


<template>
       <div class="main-signup-container">
           <div class="signup-container">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <input type="password" placeholder="Confirm Password" required>
                <button type="submit">Créer mon compte</button>
            </form>
            <div class="login-link">
                <p>Already have an account? <RouterLink to="/login">Login</RouterLink></p>
            </div>
               </div>
       </div>

</template>


<style scoped>

.main-signup-container {
            margin: 0;
            padding: 0;
            height: 100vh;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .signup-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            width: 300px;
        }
        h2 {
            color: white;
            text-align: center;
            margin-bottom: 30px;
        }
        input[type="text"], input[type="password"], input[type="email"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }
        input[type="text"]::placeholder, input[type="password"]::placeholder, input[type="email"]::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
        button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            margin-top: 20px;
        }
        .login-link {
            text-align: center;
            margin-top: 15px;
            color: white;
        }
        .login-link a {
            color: white;
            text-decoration: none;
        }

</style>
