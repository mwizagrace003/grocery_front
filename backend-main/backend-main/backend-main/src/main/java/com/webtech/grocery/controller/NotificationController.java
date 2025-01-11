package com.webtech.grocery.controller;

import com.webtech.grocery.model.Notification;
import com.webtech.grocery.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/user/unread")
    public List<Notification> getUnreadNotificationsForUser() {
        return notificationService.getUnreadNotifications();
    }


    @PostMapping("/send")
    public void sendNotification(@RequestParam String title, @RequestParam String message) {
        notificationService.sendNotification(title, message);
    }



    @PutMapping("/mark-as-read/{id}")
    public void markNotificationAsRead(@PathVariable Long id) {
        notificationService.markAsRead(id);
    }
    @PutMapping("/user/mark-all-as-read")
    public void markAllNotificationsAsRead() {
        notificationService.markAllAsRead();
    }


}
