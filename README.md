# 🎯 CSAT Pulse Dashboard

**Customer Satisfaction (CSAT) Metric Dashboard** for Zendesk support data in Snowflake (EU region)

Similar to the TTR dashboard, this provides real-time visibility into CSAT metrics, team performance, agent rankings, and satisfaction trends.

---

## ✨ Features

- **Real-time CSAT Score** - Current satisfaction percentage with month-over-month comparison
- **Interactive Charts** - Trends, team breakdowns, agent performance, rating distribution
- **Team Analytics** - CSAT by support team with detailed metrics
- **Agent Leaderboard** - Top agents ranked by satisfaction score
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Theme** - Professional dashboard UI with Tailwind CSS

---

## 📊 Data Source

| Property | Value |
|----------|-------|
| Database | `SANDBOX_LAKEHOUSE` |
| Schema | `INTERNAL_ANALYTICS` |
| Table | `ZENDESK_PRODUCTIVITY_METRICS_TICKETS` |
| Region | EU Snowflake |

---

## 🚀 Quick Deploy to Lovable.app (5 minutes)

### Step 1: Create Lovable Project
1. Go to **https://lovable.app**
2. Click **"Create"** → **"Start from Scratch"**
3. Name: `CSAT-Pulse-EU`
4. Click **"Create Project"**

### Step 2: Copy Dashboard Code
1. Open the **Code** editor
2. Find `App.jsx` or the main component file
3. **Replace ALL content** with code from: `src/CSATDashboard.jsx`
4. Click **Save**

### Step 3: Deploy
1. Click **"Deploy"** button (top right)
2. Select **"Lovable Hosted"** (free, public)
3. Click **"Deploy Now"**
4. Wait 30 seconds...

### ✅ Your Live URL
```
https://csat-pulse-eu-[random].lovable.app/
```

Share this link with your team!

---

## 📋 Project Structure

```
csat-pulse-dashboard/
├── src/
│   └── CSATDashboard.jsx       # Main React component
├── sql/
│   └── CSAT_Queries.sql        # 6 optimized SQL queries
├── package.json                # NPM dependencies
└── README.md                   # This file
```

---

## 🔌 Backend Integration (Optional)

The dashboard includes **sample data** and works immediately. To connect real Snowflake data:

### Option 1: Use Your Existing API
If you have a backend (like your TTR dashboard), add these endpoints:
- `GET /api/csat/metrics`
- `GET /api/csat/trends`
- `GET /api/csat/teams`
- `GET /api/csat/agents`

Use SQL queries from `sql/CSAT_Queries.sql`

### Option 2: Deploy a Lambda Function
Create a serverless function using the SQL queries and deploy to AWS Lambda

### Option 3: Lovable Native Connection
Lovable.app can connect directly to Snowflake:
1. Go to **Integrations** → **Add Snowflake**
2. Enter your EU Snowflake credentials
3. Use direct queries in the component

---

## 🛠️ Tech Stack

- **React** - Component framework
- **Recharts** - Interactive charts
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Snowflake** - Data warehouse

---

## 📝 SQL Queries Included

1. **Overall CSAT Metrics** - Monthly trend with response rate
2. **CSAT by Team** - Performance breakdown by support team
3. **CSAT Trends** - Weekly trend analysis (6 months)
4. **CSAT by Agent** - Agent performance rankings
5. **Rating Distribution** - Breakdown of satisfaction ratings
6. **CSAT vs TTR** - Correlation with resolution time

---

## 🔐 Security

- **No credentials in code** - All sensitive data in environment variables
- **Production-ready** - API authentication should be added for production
- **CORS handled** - If self-hosting, configure CORS headers

---

## 📈 Metrics Explained

| Metric | Definition |
|--------|-----------|
| **CSAT Score** | % of satisfied customers (ratings 4-5 or "satisfied") |
| **Response Rate** | % of customers who submitted a CSAT rating |
| **Rated Tickets** | Number of tickets with CSAT responses |
| **Satisfied** | Tickets with positive CSAT feedback |
| **Unsatisfied** | Tickets with negative CSAT feedback |

---

## 🎨 Customization

### Change Colors
Edit Tailwind classes in `CSATDashboard.jsx`:
- `from-slate-700` → `from-blue-700` (change dark theme)
- `text-emerald-400` → `text-green-400` (change accent)

### Change CSAT Calculation
Update the condition in SQL + component:
```sql
-- Current: '5', '4', 'satisfied'
CASE WHEN SATISFACTION_RATING_SCORE IN ('your_values') THEN 1
```

### Add More Metrics
- First Response Time (FRT)
- Resolution Time (TTR)
- Customer Effort Score (CES)
- Net Promoter Score (NPS)

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank screen | Check browser console (F12) for errors |
| No data showing | Verify Snowflake query permissions |
| Charts not rendering | Ensure recharts library is installed |
| API 404 errors | Check API endpoint URLs in component |
| Slow dashboard | Add database indexes on TEAM_NAME, ASSIGNEE_NAME |

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the deployment steps for detailed instructions
3. Check Lovable.app documentation for deployment issues

---

**Ready to deploy?** Follow the [Quick Deploy](#-quick-deploy-to-lovableapp-5-minutes) section above!