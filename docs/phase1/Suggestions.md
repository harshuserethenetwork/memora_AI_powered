### A few things I'd add before you start coding

These aren't "Phase 2" features—they'll save you pain even in Phase 1:

1. Authentication strategy
   - Anonymous user?
   - Phone OTP?
   - Clerk/Firebase/Supabase Auth?
   - Even if basic, decide it now.
2. Transcript processing state
   - Every call should have a status (Pending, Uploading, Processing, Completed, Failed) so the UI reflects progress.
3. Manual refresh & retry
   - Include pull-to-refresh on the call log.
   - Allow retry if upload or transcription fails.
4. Background synchronization
   - If the upload couldn't happen immediately (no internet, battery optimization), queue it and retry later.
5. Permissions handling
   - Users may deny permissions initially.
   - Provide a dedicated screen explaining why permissions are needed and a shortcut to app settings.
6. Recording availability
   - Not all Android devices expose call recordings, and some don't record calls at all due to OEM restrictions or Android policies.
   - Design the data model so a call can exist without a recording, and the UI should gracefully display "Recording unavailable."
