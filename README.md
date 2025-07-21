# 🌐 ATL Mentorship Web Portal

**ATL Mentorship Web** is an administrative and monitoring platform designed to support the **ATL Mentorship App**. It facilitates real-time tracking, coordination, and data management of mentorship activities under the **Atal Tinkering Labs (ATL)** initiative by enabling access to relevant stakeholders based on their roles.

## 🧩 Overview

The platform empowers multiple levels of users — from public visitors to district and university coordinators — with role-based access to manage, supervise, and analyze mentorship activities happening across schools.

It integrates seamlessly with the **ATL Mentorship Mobile App**, allowing mentors to:
- Select their assigned school
- Upload daily attendance
- Submit activity reports

All this data is synced and managed in the web platform for visibility and control by higher authorities.

## 👥 User Roles & Access

| User Type                | Access Permissions |
|-------------------------|--------------------|
| 👤 **Public User**           | View general information and statistics |
| 🧑‍💼 **District Science Officer** | View and manage data of all schools in their district |
| 🎓 **University Coordinator** | Oversee assigned mentors and colleges |
| 🏫 **College Coordinator**    | Track mentors and students from their respective college |
| 👨‍🏫 **Mentors (via App)**      | Select school, submit attendance, upload reports (linked via app) |

Each user role has distinct dashboards and privileges.

## 🔗 Connected App

This web platform is **linked to the ATL Mentorship Mobile App**, which allows:
- 📍 School selection by mentors
- 📝 Daily attendance submission
- 🧾 Uploading mentorship activity reports
- 📅 Session scheduling

Data from the app is synced with the web dashboard for real-time monitoring.

## 🚀 Features

- 🔐 Role-based authentication & authorization
- 🏫 School-wise mentor assignment tracking
- 📊 Attendance and activity data visualization
- 📝 Mentor report review system
- 📂 Data export and report generation
- 📬 Notifications and alerts for coordinators

## 🛠️ Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js 
- **Database**: Firebase Firestore / AWS
- **Authentication**: AWS Gen2 Auth
- **Mobile App**: Linked via Firebase backend


## 🧪 How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vani6125/atl_mentorship_web.git
   cd atl_mentorship_web


