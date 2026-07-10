# Mrinda - Phase 1

Version: 0.1
Status: In Progress

---

# Objective

Build the first working version of Mrinda capable of collecting call information,
processing call recordings and displaying transcriptions.

The focus of Phase 1 is **technical validation** rather than feature completeness.

---

# Goals

## Functional Goals

- Access user's call logs
- Display call logs in the application
- Listen for phone call events
- Refresh call logs after every completed call
- Access call recordings (where available)
- Upload recordings to backend
- Transcribe recordings
- Display transcription with call details

---

# Non Goals

The following are intentionally postponed.

- AI conversation summaries
- CRM
- Follow-up reminders
- Search
- Tags
- Analytics
- Team accounts
- Lead management
- Credit management
- Contact syncing improvements

---

# User Journey

## First Time User

Install App

↓

Registration

↓

Profile Setup

- Name
- Company Name
- Company Type (Optional)

↓

Permission Requests

- Phone State
- Call Logs
- Contacts (optional)
- Notifications
- Storage / Media Access
- Microphone (if required)

↓

Homepage (Call Logs)

---

# Returning User

Open App

↓

Homepage

↓

Latest Call Logs Loaded

↓

Select Call

↓

Call Details Screen

- Phone Number
- Contact Name
- Duration
- Date
- Recording
- Transcription

---

# Incoming / Outgoing Call Flow

Phone Call Starts

↓

Android broadcasts call event

↓

App receives event

↓

Wait until call ends

↓

Fetch latest call log

↓

Find latest recording

↓

Upload recording

↓

Backend transcription

↓

Save transcript

↓

Refresh UI

---

# Screens

## 1. Splash Screen

- App initialization
- Authentication check

---

## 2. Registration

Fields

- Mobile Number / Email
- OTP (if applicable)

---

## 3. Profile Setup

Fields

- Name
- Company Name
- Company Type (Optional)

---

## 4. Permissions

Explain why permissions are required.

Permissions

- Call Logs
- Phone State
- Storage
- Notifications

---

## 5. Homepage

Displays

- Recent Calls
- Contact Name
- Number
- Duration
- Call Type
- Transcript Status

Actions

- Refresh
- Open Call

---

## 6. Call Detail Screen

Displays

- Contact Information
- Call Metadata
- Recording Player
- Transcript
- Upload Status

---

## 7. Profile

Displays

- User Details
- Permissions Status
- Logout

---

# System Flow

Phone

↓

Call Event Listener

↓

Call Log Fetcher

↓

Recording Locator

↓

Upload Service

↓

Backend

↓

Speech-to-Text

↓

Database

↓

App Refresh

---

# Data Model

## User

- id
- name
- companyName
- companyType

---

## Call

- id
- phoneNumber
- contactName
- callType
- duration
- timestamp
- recordingPath
- transcript
- transcriptStatus

---

# Transcript Status

- Pending
- Uploading
- Processing
- Completed
- Failed

---

# Success Criteria

A successful Phase 1 means:

✓ App installs successfully

✓ User onboarding works

✓ Permissions granted

✓ Call logs visible

✓ New calls automatically appear

✓ Recordings uploaded

✓ Transcription completed

✓ User can open a call and read transcript

---

More to go...