export type TProducts = {
  id?: number | string;
  availabilityStatus?: string;
  brand?: string;
  category?: string;
  description?: string;
  dimensions?: { width: number; height: number; length: number };
  images?: string[];
  miniumOrderQuantity?: number;
  price?: number;
  rating?: number;
  returnPolicy: string;
  reviews?: { [key: string]: string | number }[];
  title?: string;
  thumbnail?: string;
  stock?: number;
  sku?: string;
  tags?: string[];
  warrantyInformation?: string;
  weight?: number;
  shippingInformation?: string;
  meta?: {
    barcode: string;
    createdAt: string;
    qrCode: string;
    updatedAt: string;
  };
};
