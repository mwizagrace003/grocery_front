package com.webtech.grocery.service;

import com.webtech.grocery.model.ActivityLog;
import com.webtech.grocery.userRepository.ActivityLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityLogService {

    private final ActivityLogRepository activityLogRepository;

    @Autowired
    public ActivityLogService(ActivityLogRepository activityLogRepository) {
        this.activityLogRepository = activityLogRepository;
    }

    /**
     * Save a new activity log entry.
     *
     * @param activityLog the activity log to save
     */
    public void saveActivityLog(ActivityLog activityLog) {
        activityLogRepository.save(activityLog);
    }

    /**
     * Retrieve the 10 most recent activity logs.
     *
     * @return a list of the most recent activity logs
     */
    public List<ActivityLog> getRecentActivities() {
        return activityLogRepository.findTop10ByOrderByTimestampDesc();
    }
}
