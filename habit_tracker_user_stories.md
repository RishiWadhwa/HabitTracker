# Habit Tracker User Story

---

## Excercise 3: Login/Registration Screen

### 📝 Application Registration
- **As a** new user  
- **I want to** register by entering my username, email, and password  
- **So that** I can create an account and use the application  

### 🔐 Application Login
- **As a** registered user  
- **I want to** log in using my email and password  
- **So that** I can access my account  

### ❗ Error Feedback on Signup and Login
- **As a** user  
- **I want to** receive a warning if I click Sign Up without entering my details  
- **So that** I know which fields are required  

- **As a** user  
- **I want to** receive an error message if my login credentials are incorrect  
- **So that** I understand why the login failed  

### 💾 Store User Data
- **As a** user  
- **I want to** have my login/session data stored in local storage  
- **So that** I stay logged in even if I refresh or revisit the app later

---

## 🏠 Exercise 4: Home Screen

### 📊 View Overview of Habit Progress
- **As a** user  
- **I want to** view an overview of my habits on the home screen  
- **So that** I can monitor my progress at a glance  
- **Example:** The app shows today's completed habits, current streak, and weekly progress  
- **Why:** Keeps users motivated with visible progress

### 👋 Show Introductory Guide for New Users
- **As a** new user  
- **I want to** see a quick introductory guide on the home screen  
- **So that** I can learn how to use the app  
- **Example:** A carousel highlights how to create a habit, mark it as done, and view streaks  
- **Why:** Helps new users onboard quickly and stay engaged

### 🚀 Access Most-Used Features Quickly
- **As a** user  
- **I want to** access my most-used features from the home screen  
- **So that** I can navigate the app efficiently  
- **Example:** Quick links to "Add Habit", "Today’s Tasks", and "Stats"  
- **Why:** Reduces friction and enhances usability

---

## 🔍 Exercise 5: Detail Screen

### 📄 View Habit Details
- **As a** user  
- **I want to** view detailed information on a selected habit  
- **So that** I can make informed decisions about tracking or editing it  
- **Example:** The habit detail screen shows frequency, reminders, history, and streak data  
- **Why:** Helps users understand progress and fine-tune their goals

### 💾 Save or Share Habits
- **As a** user  
- **I want to** perform actions like saving or sharing a habit  
- **So that** I can revisit or recommend it to others  
- **Example:** Save a habit to favorites or share a “30-Day Water Challenge” with a friend  
- **Why:** Encourages engagement and community sharing

### 🔁 View Related Habit Suggestions
- **As a** user  
- **I want to** view related habits on the detail screen  
- **So that** I can discover new routines  
- **Example:** If viewing a "Daily Meditation" habit, the app shows "Gratitude Journal" and "Stretching" suggestions  
- **Why:** Helps users expand and diversify their habit stack

---

## 💾 Exercise 6: Persistent Data

### 🔐 Keep Login State
- **As a** user  
- **I want to** stay logged in across sessions  
- **So that** I don’t have to re-enter my details every time  
- **Example:** The app uses local storage or secure cookies to persist authentication  
- **Why:** Improves convenience and retention

### 🎛️ Save User Preferences
- **As a** user  
- **I want to** save preferences like dark mode or notification times  
- **So that** the app remembers my settings  
- **Example:** The app launches in dark mode automatically if that was previously enabled  
- **Why:** Personalizes the experience and improves accessibility

### 🧑‍💼 Persist Activity Logs for Admins
- **As an** admin  
- **I want to** persist user activity logs  
- **So that** I can analyze usage and engagement trends  
- **Example:** Logs track habit completions, streak drops, and retention rates  
- **Why:** Enables data-driven product improvements

---

## 🌐 Exercise 7: External API Integration

### ☀️ Weather-Based Habit Suggestions
- **As a** user  
- **I want to** see weather updates on the home screen  
- **So that** I can adjust outdoor habits accordingly  
- **Example:** The app integrates with a weather API to suggest “Indoor Yoga” on rainy days  
- **Why:** Enhances relevance and flexibility

### 💱 Currency API for Goal Rewards
- **As a** user  
- **I want to** see live currency values when setting financial goals  
- **So that** I can align rewards with real-world value  
- **Example:** When setting a "Save $10/week" habit, the app shows equivalent in local currency  
- **Why:** Makes financial habits meaningful for international users

### 📍 Location-Based Habit Ideas
- **As a** user  
- **I want to** discover nearby wellness spots  
- **So that** I can create location-based habits  
- **Example:** The app shows nearby gyms or parks using a Maps API  
- **Why:** Encourages real-world habit engagement

---

## ⚙️ Exercise 8: Settings Menu

### 🧭 Universal Access to Settings
- **As a** user  
- **I want to** access the settings menu from any screen  
- **So that** I can change preferences conveniently  
- **Example:** A persistent gear icon navigates to settings from the top-right corner  
- **Why:** Supports flexible user control

### 📂 Categorized Settings Layout
- **As a** user  
- **I want to** see settings grouped by category  
- **So that** I can find what I need quickly  
- **Example:** Tabs for Profile, Notifications, Display, and Data  
- **Why:** Reduces cognitive load and speeds up navigation

### 🔐 Admin Control Over Settings
- **As an** admin  
- **I want to** enable or disable settings for users  
- **So that** I can maintain compliance or simplify UI  
- **Example:** Disabling editing of system-defined habits for standard users  
- **Why:** Ensures governance and simplicity

---

## 🧮 Exercise 9: Settings Screen

### 🌙 Enable Dark Mode
- **As a** user  
- **I want to** enable dark mode  
- **So that** I can reduce eye strain at night  
- **Example:** A toggle under the Appearance section  
- **Why:** Supports comfort and accessibility

### 🔔 Customize Notifications
- **As a** user  
- **I want to** adjust which notifications I receive  
- **So that** I only get relevant alerts  
- **Example:** Turn on reminders for "Daily Workout", but off for "Hydration"  
- **Why:** Prevents notification fatigue

### 📧 Update Account Information
- **As a** user  
- **I want to** update my email and password  
- **So that** I can secure my account  
- **Example:** Change password flow via Account Settings  
- **Why:** Essential for user trust and control

---

## 🔔 Exercise 10: Notifications

### ⏰ Daily Reminder Alerts
- **As a** user  
- **I want to** receive a daily reminder  
- **So that** I don’t forget my habits  
- **Example:** A push notification at 7 AM to "Drink Water"  
- **Why:** Encourages consistent usage

### 🆕 Feature Announcements
- **As a** user  
- **I want to** get notified about new features  
- **So that** I can try them out  
- **Example:** "New breathing habit template available!"  
- **Why:** Drives feature adoption

### ❌ Disable Promotional Alerts
- **As a** user  
- **I want to** turn off promotional notifications  
- **So that** I only get relevant reminders  
- **Example:** Toggle off "Product Updates", leave "Daily Habits" on  
- **Why:** Respects user preferences

### 🎯 Targeted Admin Messaging
- **As an** admin  
- **I want to** send messages to specific user segments  
- **So that** I can improve engagement  
- **Example:** Send a challenge invite to users with more than 10 completed habits  
- **Why:** Increases personalization and retention

---

## 🧩 Exercise 11: App Type Variants (Habit Tracker Examples)

### 🧑 Social Features
- **As a** user  
- **I want to** connect with friends and share habit progress  
- **So that** I stay motivated through social accountability

### 🏦 Financial Habit Tracking
- **As a** user  
- **I want to** track spending habits  
- **So that** I can build savings routines

### 🎓 Educational Habit Routines
- **As a** student  
- **I want to** track study habits and break time  
- **So that** I stay focused and balanced

### ✈️ Travel-Based Habit Plans
- **As a** traveler  
- **I want to** adjust habits based on time zone and availability  
- **So that** I stay consistent on the go
