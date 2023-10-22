###########################################
# S3 bucket for www.budw.in
###########################################
resource "aws_s3_bucket" "www_bucket" {
  bucket = "www.${var.bucket_name}"
}

resource "aws_s3_bucket_public_access_block" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

data "aws_iam_policy_document" "allow_public_s3_read_www_bucket" {
  statement {
    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    resources = [
      aws_s3_bucket.www_bucket.arn,
      "${aws_s3_bucket.www_bucket.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_ownership_controls" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_policy" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id
  policy = data.aws_iam_policy_document.allow_public_s3_read_www_bucket.json
}

resource "aws_s3_bucket_cors_configuration" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["https://www.${var.domain_name}"]
    max_age_seconds = 3000
  }

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}

resource "aws_s3_bucket_website_configuration" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id

  redirect_all_requests_to {
    host_name = var.domain_name
  }
}

###########################################
# S3 bucket for budw.in
###########################################
resource "aws_s3_bucket" "root_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "root_bucket" {
  bucket = aws_s3_bucket.root_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

data "aws_iam_policy_document" "allow_public_s3_read_root_bucket" {
  statement {
    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    resources = [
      aws_s3_bucket.root_bucket.arn,
      "${aws_s3_bucket.root_bucket.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_ownership_controls" "root_bucket" {
  bucket = aws_s3_bucket.root_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_policy" "root_bucket" {
  bucket = aws_s3_bucket.root_bucket.id
  policy = data.aws_iam_policy_document.allow_public_s3_read_root_bucket.json
}

resource "aws_s3_bucket_website_configuration" "root_bucket" {
  bucket = aws_s3_bucket.root_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

output "website_endpoint" {
  value = "Website can be accessed at: ${aws_s3_bucket_website_configuration.root_bucket.website_endpoint}"
}

# Upload files to root_bucket S3 bucket
module "template_files" {
  source = "hashicorp/dir/template"
  base_dir = "${path.module}/../dist/"
}

resource aws_s3_object assets {
  for_each = module.template_files.files

  bucket = aws_s3_bucket.root_bucket.id
  key    = each.key
  content_type = each.value.content_type
  source  = each.value.source_path
  etag    = each.value.digests.md5
}
