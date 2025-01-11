
package com.webtech.grocery.controller;




import com.webtech.grocery.model.ActivityLog;
import com.webtech.grocery.model.Role;
import com.webtech.grocery.model.User;
import com.webtech.grocery.service.ActivityLogService;
import com.webtech.grocery.service.UserService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
//
//import com.itextpdf.kernel.font.PdfFont;
//import com.itextpdf.kernel.font.PdfFontFactory;
//
//import com.itextpdf.kernel.pdf.PdfDocument;
//import com.itextpdf.kernel.pdf.PdfWriter;
//import com.itextpdf.layout.Document;
//import com.itextpdf.layout.element.Paragraph;
//import com.itextpdf.layout.element.Table;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin (origins = "http://localhost:5173/")
@RestController
@RequestMapping("/admin")
public class AdminUserController {

    private final UserService userService;
    private final ActivityLogService activityLogService;

    public AdminUserController(UserService userService, ActivityLogService activityLogService) {
        this.userService = userService;
        this.activityLogService = activityLogService;
    }

    @GetMapping("/users")
    public ResponseEntity<Map<String, Object>> getUsers(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "5") int pageSize,
            @RequestParam(defaultValue = "id") String sortBy) {

        // Use the pageable method to get a page of users with sorting
        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
        Page<User> userPage = userService.getAllUsers(pageable);

        // Build the response
        Map<String, Object> response = new HashMap<>();
        response.put("users", userPage.getContent());
        response.put("currentPage", pageNo);
        response.put("totalPages", userPage.getTotalPages());
        response.put("totalUsers", userPage.getTotalElements());
        response.put("sortBy", sortBy);

        return ResponseEntity.ok(response);
    }



//    @GetMapping("/users/add")
//    public String showAddUserForm(Model model) {
//        model.addAttribute("user", new User()); // Create a new User object
//        return "add-user"; // Return the add user template
//    }

    @PostMapping("/users")
    public String addUser (@ModelAttribute User user) {
        userService.registerUser (user); // Save the user using your service
        return "Successfully registered user"; // Redirect to the user management page after saving
    }



    @PostMapping("/users/delete/{id}")
    public String deleteUser (@PathVariable Long id) {
        userService.deleteUser (id); // Call the service to delete the user
        return "Successfully"; // Redirect to the user management page after deletion
    }



    @GetMapping("/search/results")
    public List<User> searchUsers(@RequestParam(required = false) String username,
                              @RequestParam(required = false) String email
                           ) {
        List<User> users = userService.searchUsers(username, email); // Call the service to search for users

        return users; // Return the template that displays the list of users
    }

    @GetMapping("/download/users")
    @ResponseBody
    public ResponseEntity<ByteArrayResource> downloadUsers() throws IOException {
        List<User> users = userService.getAllUsers(); // Fetch all users from the service

        // Create CSV content
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(outputStream);

        // Write CSV header
        writer.println("ID,Username,Email"); // Adjust according to your User fields

        // Write user data
        for (User  user : users) {
            writer.printf("%d,%s,%s%n", user.getId(), user.getUsername(), user.getEmail()); // Adjust according to your User fields
        }
        writer.flush();
        writer.close();

        ByteArrayResource resource = new ByteArrayResource(outputStream.toByteArray());

        // Set the content type and attachment header
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment ;filename=users.csv");

        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_PLAIN)
                .contentLength(resource.contentLength())
                .headers(headers)
                .body(resource);
    }




    // Handle POST requests for user upload
    @PostMapping("/upload/users")
    public String uploadUsers(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }

        try {
            List<User> userList = new ArrayList<>();
            BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
            String line;
            reader.readLine(); // Skip header line

            while ((line = reader.readLine()) != null) {
                String[] data = line.split(",");
                User user = new User();
                user.setUsername(data[0]);
                user.setFirstName(data[1]);
                user.setLastName(data[2]);
                user.setEmail(data[3]);
                user.setPhoneNumber(data[4]);
//                user.setProfilePicture(data[5]);
                user.setRole(Role.valueOf(data[5]));
                userList.add(user);
            }

            userService.saveAll(userList);

            return "User file uploaded successfully!";
        } catch (IOException | IllegalArgumentException e) {

            return e.getMessage();
        }


    }




    @GetMapping("/user-role-stats")
    @ResponseBody
    public Map<String, Integer> getUserRoleStatistics() {
        List<User> users = userService.getAllUsers(); // Fetch all users from the service
        Map<String, Integer> roleStats = new HashMap<>();

        // Count users per role
        for (User  user : users) {
            if (user.getRole() != null){
                String role = user.getRole().name();
                roleStats.put(role, roleStats.getOrDefault(role, 0) +1);
            }else {
                roleStats.put("no roles", roleStats.getOrDefault("no role",0) +1);
            }
        }

        return roleStats; // Return the statistics as a JSON response
    }


//    @GetMapping("/download/users/pdf")
//    @ResponseBody
//    public ResponseEntity<ByteArrayResource> downloadUsersPdf() throws IOException {
//        List<User> users = userService.getAllUsers(); // Fetch all users from the service
//
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//        PdfWriter writer = new PdfWriter(outputStream);
//        PdfDocument pdfDocument = new PdfDocument(writer);
//        Document document = new Document(pdfDocument);
//
//        // Create a font instance
//        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA_BOLD);
//
//        // Add a title with font size and font
//        document.add(new Paragraph("User  Data").setFontSize(18).setFont(font));
//
//        // Create a table with 3 columns
//        Table table = new Table(3);
//        table.addHeaderCell("ID");
//        table.addHeaderCell("Username");
//        table.addHeaderCell("Email");
//
//
//        // Add user data to the table
//        for (User  user : users) {
//            table.addCell(String.valueOf(user.getId()));
//            table.addCell(user.getUsername());
//            table.addCell(user.getEmail());
//        }
//
//        document.add(table);
//        document.close();
//
//        ByteArrayResource resource = new ByteArrayResource(outputStream.toByteArray());
//
//        // Set the content type and attachment header
//        HttpHeaders headers = new HttpHeaders();
//        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=users.pdf");
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.APPLICATION_PDF)
//                .contentLength(resource.contentLength())
//                .headers(headers)
//                .body(resource);
//    }


    @PutMapping("/users/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        try {
            // Call the service method to update the user
            User updatedUser = userService.updateUser(id, user);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/total-users")
    public ResponseEntity<Long> getTotalUsers() {
        Long totalUsers = userService.countTotalUsers();
        return ResponseEntity.ok(totalUsers);
    }

    @GetMapping("/recent-activity")
    public ResponseEntity<List<ActivityLog>> getRecentActivityLogs() {
        List<ActivityLog> recentLogs = activityLogService.getRecentActivities();
        return ResponseEntity.ok(recentLogs);
    }

}