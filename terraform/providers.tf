terraform {
  required_version = "~> 1.5.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.21.0"
    }
  }

  backend "s3" {
    bucket = "budwin-website-terraform"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      BudwinWebsite = "Prod"
    }
  }
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"

  default_tags {
    tags = {
      Project = "BudwinWebsite"
    }
  }
}

# This supports setting the content type when uploading files to S3
module "dir" {
  source  = "hashicorp/dir/template"
  version = "1.0.2"
  base_dir = "${path.module}/../dist/"
}
