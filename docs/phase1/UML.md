                    +----------------------+
                    |      Android OS      |
                    +----------+-----------+
                               |
                         Call Broadcast
                               |
                               v
                 +---------------------------+
                 |   Call Event Listener      |
                 +------------+--------------+
                              |
                    Fetch Latest Call
                              |
                              v
                 +---------------------------+
                 |      Call Log Service      |
                 +------------+--------------+
                              |
                    Locate Recording
                              |
                              v
                 +---------------------------+
                 | Recording Upload Service   |
                 +------------+--------------+
                              |
                       Upload Audio
                              |
                              v
                 +---------------------------+
                 |        Backend API         |
                 +------------+--------------+
                              |
                     Speech-to-Text Engine
                              |
                              v
                 +---------------------------+
                 |      Transcript Store      |
                 +------------+--------------+
                              |
                        Fetch Transcript
                              |
                              v
                 +---------------------------+
                 |      React Native UI       |
                 +---------------------------+