import React from 'react';

export enum OrderStatus {
  PENDING = '待派单',
  DISPATCHED = '已派单',
  COMPLETED = '已完成',
  CANCELED = '已作废'
}

export interface Order {
  id: string;
  type: string;
  subType: string; // e.g., '库', '鱼'
  subTypeColor: string;
  title: string;
  time: string;
  phone: string;
  address: string;
  status: OrderStatus;
  price?: string;
  tags?: string[];
  isError?: boolean;
}

export interface ChatMessage {
  id: string;
  name: string;
  role: string; // e.g., '电话组一组', '管理员'
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  isOnline?: boolean;
  type: 'individual' | 'group';
}

export interface AfterSalesTicket {
  id: string;
  orderId: string;
  request: string; // Customer request
  note: string;
  technician: string;
  technicianRole: string;
  status: 'processing' | 'done';
  time: string;
}

export interface MenuItem {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  color?: string;
}