/**
 * Role-based access control utilities for HSK Tutor
 * 
 * Roles are currently stored locally.
 */

export type UserRole = 'admin' | 'user';

export interface UserRoleData {
  role: UserRole;
  permissions: string[];
}

// Default permissions for each role
const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  admin: [
    'manage_users',
    'view_analytics',
    'manage_content',
    'export_data',
    'access_admin_panel',
  ],
  user: [
    'view_content',
    'practice_lessons',
    'track_progress',
  ],
};

/**
 * Check if user has a specific permission
 */
export function hasPermission(userRole: UserRole | null, permission: string): boolean {
  if (!userRole) return false;
  const permissions = ROLE_PERMISSIONS[userRole] || [];
  return permissions.includes(permission);
}

/**
 * Get all permissions for a role
 */
export function getRolePermissions(role: UserRole): string[] {
  return ROLE_PERMISSIONS[role] || [];
}

/**
 * Validate if a string is a valid role
 */
export function isValidRole(role: unknown): role is UserRole {
  return role === 'admin' || role === 'user';
}

/**
 * Determine user role - defaults to user
 */
export function determineUserRole(
  metadata: any,
  email: string | undefined
): UserRole {
  return 'user';
}