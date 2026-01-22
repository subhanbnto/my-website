# Netlify Functions Setup Guide

## ✅ Yes! You Can Use Netlify for Backend!

Netlify Functions allow you to run serverless functions directly on Netlify - no separate backend needed!

## What Changed

I've converted your Express backend to a **Netlify Function**. Now everything runs on Netlify!

## Setup Steps

### 1. Install Dependencies

The Netlify function needs `nodemailer`. Make sure it's installed:

```bash
npm install
```

### 2. Configure Netlify Environment Variables

1. **Go to Netlify Dashboard**
   - Select your site
   - **Site settings** → **Environment variables**

2. **Add these variables:**
   ```
   EMAIL_HOST=smtp.zohocloud.ca
   EMAIL_PORT=465
   EMAIL_SECURE=true
   EMAIL_USER=info@subhan.ca
   EMAIL_PASS=your-zoho-app-password-here
   CONTACT_EMAIL=info@subhan.ca
   SEND_CONFIRMATION=true
   ```

3. **Important**: 
   - Use your **Zoho App Password** (not regular password)
   - No quotes around values
   - No spaces

### 3. Redeploy Your Site

1. **Push to GitHub** (if you made changes):
   ```bash
   git add .
   git commit -m "Add Netlify Functions support"
   git push
   ```

2. **Or trigger manual deploy in Netlify:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Clear cache and deploy site**

### 4. Test the Contact Form

1. Visit your Netlify site
2. Go to Contact section
3. Fill out and submit the form
4. You should receive an email! 🎉

## How It Works

- **Development**: Uses local backend (`http://localhost:3001/api/contact`)
- **Production**: Uses Netlify Function (`/.netlify/functions/contact`)

The function automatically handles:
- Email sending via Zoho Mail
- Form validation
- Error handling
- CORS headers

## File Structure

```
my-website/
├── netlify/
│   └── functions/
│       └── contact.js    # Netlify Function
├── netlify.toml          # Netlify configuration
└── ...
```

## Troubleshooting

### Function Not Found (404)

**Problem**: `/.netlify/functions/contact` returns 404

**Solution**:
1. Make sure `netlify/functions/contact.js` exists
2. Check `netlify.toml` is in the root directory
3. Redeploy the site

### Email Not Sending

**Problem**: Form submits but no email

**Solution**:
1. Check Netlify environment variables are set correctly
2. Verify `EMAIL_PASS` is your App Password (not regular password)
3. Check Netlify Function logs:
   - Netlify Dashboard → Your site → **Functions** tab
   - Click on the function to see logs

### CORS Errors

**Problem**: Browser shows CORS error

**Solution**: 
- The function already includes CORS headers
- Make sure you're using the function endpoint (not a separate backend)

## Benefits of Netlify Functions

✅ **Everything in one place** - No separate backend deployment  
✅ **Automatic scaling** - Handles traffic automatically  
✅ **Free tier** - 125,000 requests/month free  
✅ **Easy deployment** - Deploys with your site  
✅ **Built-in monitoring** - View logs in Netlify dashboard  

## Viewing Function Logs

1. Go to Netlify Dashboard
2. Select your site
3. Go to **Functions** tab
4. Click on `contact` function
5. View real-time logs

## Testing Locally

You can test Netlify Functions locally with Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run locally
netlify dev
```

This will start both your frontend and functions locally.

---

**That's it!** Your contact form should now work entirely on Netlify! 🚀

