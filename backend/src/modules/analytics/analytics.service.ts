import { AnalyticsRepository } from "./analytics.repository";

export const AnalyticsService = {
  getDashboardData: async () => {
    const totalOrders = await AnalyticsRepository.countOrders();
    const totalUsers = await AnalyticsRepository.countUsers();
    const totalPaid = await AnalyticsRepository.countPaidPayments();
    const revenue = await AnalyticsRepository.totalRevenue();
    const aiMessages = await AnalyticsRepository.aiMessageCount();

    const salesChart = await AnalyticsRepository.salesChart();
    const chatChart = await AnalyticsRepository.chatChart();

    return {
      stats: {
        totalOrders,
        totalUsers,
        totalPaid,
        totalRevenue: revenue._sum.amount || 0,
        aiMessages,
      },
      salesChart: salesChart.map((r) => ({
        date: r.createdAt.toISOString().split("T")[0],
        count: r._count.id,
      })),
      chatChart: chatChart.map((r) => ({
        date: r.createdAt.toISOString().split("T")[0],
        count: r._count.id,
      })),
    };
  },
};
