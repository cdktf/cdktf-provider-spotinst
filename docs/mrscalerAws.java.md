# `mrscalerAws` Submodule <a name="`mrscalerAws` Submodule" id="@cdktf/provider-spotinst.mrscalerAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrscalerAws <a name="MrscalerAws" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws spotinst_mrscaler_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAws;

MrscalerAws.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .strategy(java.lang.String)
//  .additionalInfo(java.lang.String)
//  .additionalPrimarySecurityGroups(java.util.List<java.lang.String>)
//  .additionalReplicaSecurityGroups(java.util.List<java.lang.String>)
//  .applications(IResolvable)
//  .applications(java.util.List<MrscalerAwsApplications>)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .bootstrapActionsFile(IResolvable)
//  .bootstrapActionsFile(java.util.List<MrscalerAwsBootstrapActionsFile>)
//  .clusterId(java.lang.String)
//  .configurationsFile(IResolvable)
//  .configurationsFile(java.util.List<MrscalerAwsConfigurationsFile>)
//  .coreDesiredCapacity(java.lang.Number)
//  .coreEbsBlockDevice(IResolvable)
//  .coreEbsBlockDevice(java.util.List<MrscalerAwsCoreEbsBlockDevice>)
//  .coreEbsOptimized(java.lang.Boolean)
//  .coreEbsOptimized(IResolvable)
//  .coreInstanceTypes(java.util.List<java.lang.String>)
//  .coreLifecycle(java.lang.String)
//  .coreMaxSize(java.lang.Number)
//  .coreMinSize(java.lang.Number)
//  .coreScalingDownPolicy(IResolvable)
//  .coreScalingDownPolicy(java.util.List<MrscalerAwsCoreScalingDownPolicy>)
//  .coreScalingUpPolicy(IResolvable)
//  .coreScalingUpPolicy(java.util.List<MrscalerAwsCoreScalingUpPolicy>)
//  .coreUnit(java.lang.String)
//  .customAmiId(java.lang.String)
//  .description(java.lang.String)
//  .ebsRootVolumeSize(java.lang.Number)
//  .ec2KeyName(java.lang.String)
//  .exposeClusterId(java.lang.Boolean)
//  .exposeClusterId(IResolvable)
//  .id(java.lang.String)
//  .instanceWeights(IResolvable)
//  .instanceWeights(java.util.List<MrscalerAwsInstanceWeights>)
//  .jobFlowRole(java.lang.String)
//  .keepJobFlowAlive(java.lang.Boolean)
//  .keepJobFlowAlive(IResolvable)
//  .logUri(java.lang.String)
//  .managedPrimarySecurityGroup(java.lang.String)
//  .managedReplicaSecurityGroup(java.lang.String)
//  .masterEbsBlockDevice(IResolvable)
//  .masterEbsBlockDevice(java.util.List<MrscalerAwsMasterEbsBlockDevice>)
//  .masterEbsOptimized(java.lang.Boolean)
//  .masterEbsOptimized(IResolvable)
//  .masterInstanceTypes(java.util.List<java.lang.String>)
//  .masterLifecycle(java.lang.String)
//  .masterTarget(java.lang.Number)
//  .provisioningTimeout(MrscalerAwsProvisioningTimeout)
//  .region(java.lang.String)
//  .releaseLabel(java.lang.String)
//  .repoUpgradeOnBoot(java.lang.String)
//  .retries(java.lang.Number)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<MrscalerAwsScheduledTask>)
//  .securityConfig(java.lang.String)
//  .serviceAccessSecurityGroup(java.lang.String)
//  .serviceRole(java.lang.String)
//  .stepsFile(IResolvable)
//  .stepsFile(java.util.List<MrscalerAwsStepsFile>)
//  .tags(IResolvable)
//  .tags(java.util.List<MrscalerAwsTags>)
//  .taskDesiredCapacity(java.lang.Number)
//  .taskEbsBlockDevice(IResolvable)
//  .taskEbsBlockDevice(java.util.List<MrscalerAwsTaskEbsBlockDevice>)
//  .taskEbsOptimized(java.lang.Boolean)
//  .taskEbsOptimized(IResolvable)
//  .taskInstanceTypes(java.util.List<java.lang.String>)
//  .taskLifecycle(java.lang.String)
//  .taskMaxSize(java.lang.Number)
//  .taskMinSize(java.lang.Number)
//  .taskScalingDownPolicy(IResolvable)
//  .taskScalingDownPolicy(java.util.List<MrscalerAwsTaskScalingDownPolicy>)
//  .taskScalingUpPolicy(IResolvable)
//  .taskScalingUpPolicy(java.util.List<MrscalerAwsTaskScalingUpPolicy>)
//  .taskUnit(java.lang.String)
//  .terminationPolicies(IResolvable)
//  .terminationPolicies(java.util.List<MrscalerAwsTerminationPolicies>)
//  .terminationProtected(java.lang.Boolean)
//  .terminationProtected(IResolvable)
//  .visibleToAllUsers(java.lang.Boolean)
//  .visibleToAllUsers(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.strategy">strategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalPrimarySecurityGroups">additionalPrimarySecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalReplicaSecurityGroups">additionalReplicaSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.applications">applications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>></code> | applications block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.bootstrapActionsFile">bootstrapActionsFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>></code> | bootstrap_actions_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.configurationsFile">configurationsFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>></code> | configurations_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreDesiredCapacity">coreDesiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsBlockDevice">coreEbsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>></code> | core_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsOptimized">coreEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreInstanceTypes">coreInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreLifecycle">coreLifecycle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMaxSize">coreMaxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMinSize">coreMinSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingDownPolicy">coreScalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>></code> | core_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingUpPolicy">coreScalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>></code> | core_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreUnit">coreUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.customAmiId">customAmiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#description MrscalerAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ec2KeyName">ec2KeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.exposeClusterId">exposeClusterId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#id MrscalerAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.instanceWeights">instanceWeights</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>></code> | instance_weights block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.jobFlowRole">jobFlowRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.keepJobFlowAlive">keepJobFlowAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.logUri">logUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedPrimarySecurityGroup">managedPrimarySecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedReplicaSecurityGroup">managedReplicaSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsBlockDevice">masterEbsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>></code> | master_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsOptimized">masterEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterInstanceTypes">masterInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterLifecycle">masterLifecycle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterTarget">masterTarget</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioningTimeout">provisioningTimeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | provisioning_timeout block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#region MrscalerAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.repoUpgradeOnBoot">repoUpgradeOnBoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#retries MrscalerAws#retries}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.securityConfig">securityConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.stepsFile">stepsFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>></code> | steps_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskDesiredCapacity">taskDesiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsBlockDevice">taskEbsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>></code> | task_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsOptimized">taskEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskInstanceTypes">taskInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskLifecycle">taskLifecycle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMaxSize">taskMaxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMinSize">taskMinSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingDownPolicy">taskScalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>></code> | task_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingUpPolicy">taskScalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>></code> | task_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskUnit">taskUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationPolicies">terminationPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>></code> | termination_policies block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationProtected">terminationProtected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.visibleToAllUsers">visibleToAllUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.strategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalInfo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}.

---

##### `additionalPrimarySecurityGroups`<sup>Optional</sup> <a name="additionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalPrimarySecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}.

---

##### `additionalReplicaSecurityGroups`<sup>Optional</sup> <a name="additionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalReplicaSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.applications"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>>

applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#applications MrscalerAws#applications}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}.

---

##### `bootstrapActionsFile`<sup>Optional</sup> <a name="bootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.bootstrapActionsFile"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>>

bootstrap_actions_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}.

---

##### `configurationsFile`<sup>Optional</sup> <a name="configurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.configurationsFile"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>>

configurations_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#configurations_file MrscalerAws#configurations_file}

---

##### `coreDesiredCapacity`<sup>Optional</sup> <a name="coreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreDesiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}.

---

##### `coreEbsBlockDevice`<sup>Optional</sup> <a name="coreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>>

core_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}

---

##### `coreEbsOptimized`<sup>Optional</sup> <a name="coreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}.

---

##### `coreInstanceTypes`<sup>Optional</sup> <a name="coreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreInstanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}.

---

##### `coreLifecycle`<sup>Optional</sup> <a name="coreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreLifecycle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}.

---

##### `coreMaxSize`<sup>Optional</sup> <a name="coreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMaxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}.

---

##### `coreMinSize`<sup>Optional</sup> <a name="coreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMinSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}.

---

##### `coreScalingDownPolicy`<sup>Optional</sup> <a name="coreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingDownPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>>

core_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}

---

##### `coreScalingUpPolicy`<sup>Optional</sup> <a name="coreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingUpPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>>

core_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}

---

##### `coreUnit`<sup>Optional</sup> <a name="coreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreUnit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}.

---

##### `customAmiId`<sup>Optional</sup> <a name="customAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.customAmiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#description MrscalerAws#description}.

---

##### `ebsRootVolumeSize`<sup>Optional</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ebsRootVolumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}.

---

##### `ec2KeyName`<sup>Optional</sup> <a name="ec2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ec2KeyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}.

---

##### `exposeClusterId`<sup>Optional</sup> <a name="exposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.exposeClusterId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#id MrscalerAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceWeights`<sup>Optional</sup> <a name="instanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.instanceWeights"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>>

instance_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#instance_weights MrscalerAws#instance_weights}

---

##### `jobFlowRole`<sup>Optional</sup> <a name="jobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.jobFlowRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}.

---

##### `keepJobFlowAlive`<sup>Optional</sup> <a name="keepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.keepJobFlowAlive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.logUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}.

---

##### `managedPrimarySecurityGroup`<sup>Optional</sup> <a name="managedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedPrimarySecurityGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}.

---

##### `managedReplicaSecurityGroup`<sup>Optional</sup> <a name="managedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedReplicaSecurityGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}.

---

##### `masterEbsBlockDevice`<sup>Optional</sup> <a name="masterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>>

master_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}

---

##### `masterEbsOptimized`<sup>Optional</sup> <a name="masterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}.

---

##### `masterInstanceTypes`<sup>Optional</sup> <a name="masterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterInstanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}.

---

##### `masterLifecycle`<sup>Optional</sup> <a name="masterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterLifecycle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}.

---

##### `masterTarget`<sup>Optional</sup> <a name="masterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterTarget"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}.

---

##### `provisioningTimeout`<sup>Optional</sup> <a name="provisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioningTimeout"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

provisioning_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#region MrscalerAws#region}.

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.releaseLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}.

---

##### `repoUpgradeOnBoot`<sup>Optional</sup> <a name="repoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.repoUpgradeOnBoot"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#retries MrscalerAws#retries}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scheduledTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.securityConfig"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}.

---

##### `serviceAccessSecurityGroup`<sup>Optional</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceAccessSecurityGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}.

---

##### `stepsFile`<sup>Optional</sup> <a name="stepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.stepsFile"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>>

steps_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#steps_file MrscalerAws#steps_file}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#tags MrscalerAws#tags}

---

##### `taskDesiredCapacity`<sup>Optional</sup> <a name="taskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskDesiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}.

---

##### `taskEbsBlockDevice`<sup>Optional</sup> <a name="taskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>>

task_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}

---

##### `taskEbsOptimized`<sup>Optional</sup> <a name="taskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}.

---

##### `taskInstanceTypes`<sup>Optional</sup> <a name="taskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskInstanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}.

---

##### `taskLifecycle`<sup>Optional</sup> <a name="taskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskLifecycle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}.

---

##### `taskMaxSize`<sup>Optional</sup> <a name="taskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMaxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}.

---

##### `taskMinSize`<sup>Optional</sup> <a name="taskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMinSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}.

---

##### `taskScalingDownPolicy`<sup>Optional</sup> <a name="taskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingDownPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>>

task_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}

---

##### `taskScalingUpPolicy`<sup>Optional</sup> <a name="taskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingUpPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>>

task_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}

---

##### `taskUnit`<sup>Optional</sup> <a name="taskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskUnit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationPolicies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>>

termination_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#termination_policies MrscalerAws#termination_policies}

---

##### `terminationProtected`<sup>Optional</sup> <a name="terminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationProtected"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}.

---

##### `visibleToAllUsers`<sup>Optional</sup> <a name="visibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.visibleToAllUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications">putApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile">putBootstrapActionsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile">putConfigurationsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice">putCoreEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy">putCoreScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy">putCoreScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights">putInstanceWeights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice">putMasterEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout">putProvisioningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile">putStepsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice">putTaskEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy">putTaskScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy">putTaskScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies">putTerminationPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalInfo">resetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalPrimarySecurityGroups">resetAdditionalPrimarySecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalReplicaSecurityGroups">resetAdditionalReplicaSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetApplications">resetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetBootstrapActionsFile">resetBootstrapActionsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetConfigurationsFile">resetConfigurationsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreDesiredCapacity">resetCoreDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsBlockDevice">resetCoreEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsOptimized">resetCoreEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreInstanceTypes">resetCoreInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreLifecycle">resetCoreLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMaxSize">resetCoreMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMinSize">resetCoreMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingDownPolicy">resetCoreScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingUpPolicy">resetCoreScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreUnit">resetCoreUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCustomAmiId">resetCustomAmiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEbsRootVolumeSize">resetEbsRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEc2KeyName">resetEc2KeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetExposeClusterId">resetExposeClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetInstanceWeights">resetInstanceWeights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetJobFlowRole">resetJobFlowRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetKeepJobFlowAlive">resetKeepJobFlowAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedPrimarySecurityGroup">resetManagedPrimarySecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedReplicaSecurityGroup">resetManagedReplicaSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsBlockDevice">resetMasterEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsOptimized">resetMasterEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterInstanceTypes">resetMasterInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterLifecycle">resetMasterLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterTarget">resetMasterTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetProvisioningTimeout">resetProvisioningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetReleaseLabel">resetReleaseLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRepoUpgradeOnBoot">resetRepoUpgradeOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetSecurityConfig">resetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceAccessSecurityGroup">resetServiceAccessSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceRole">resetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetStepsFile">resetStepsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskDesiredCapacity">resetTaskDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsBlockDevice">resetTaskEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsOptimized">resetTaskEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskInstanceTypes">resetTaskInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskLifecycle">resetTaskLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMaxSize">resetTaskMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMinSize">resetTaskMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingDownPolicy">resetTaskScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingUpPolicy">resetTaskScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskUnit">resetTaskUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationPolicies">resetTerminationPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationProtected">resetTerminationProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetVisibleToAllUsers">resetVisibleToAllUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplications` <a name="putApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications"></a>

```java
public void putApplications(IResolvable OR java.util.List<MrscalerAwsApplications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>>

---

##### `putBootstrapActionsFile` <a name="putBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile"></a>

```java
public void putBootstrapActionsFile(IResolvable OR java.util.List<MrscalerAwsBootstrapActionsFile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>>

---

##### `putConfigurationsFile` <a name="putConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile"></a>

```java
public void putConfigurationsFile(IResolvable OR java.util.List<MrscalerAwsConfigurationsFile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>>

---

##### `putCoreEbsBlockDevice` <a name="putCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice"></a>

```java
public void putCoreEbsBlockDevice(IResolvable OR java.util.List<MrscalerAwsCoreEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>>

---

##### `putCoreScalingDownPolicy` <a name="putCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy"></a>

```java
public void putCoreScalingDownPolicy(IResolvable OR java.util.List<MrscalerAwsCoreScalingDownPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>>

---

##### `putCoreScalingUpPolicy` <a name="putCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy"></a>

```java
public void putCoreScalingUpPolicy(IResolvable OR java.util.List<MrscalerAwsCoreScalingUpPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>>

---

##### `putInstanceWeights` <a name="putInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights"></a>

```java
public void putInstanceWeights(IResolvable OR java.util.List<MrscalerAwsInstanceWeights> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>>

---

##### `putMasterEbsBlockDevice` <a name="putMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice"></a>

```java
public void putMasterEbsBlockDevice(IResolvable OR java.util.List<MrscalerAwsMasterEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>>

---

##### `putProvisioningTimeout` <a name="putProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout"></a>

```java
public void putProvisioningTimeout(MrscalerAwsProvisioningTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask"></a>

```java
public void putScheduledTask(IResolvable OR java.util.List<MrscalerAwsScheduledTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>>

---

##### `putStepsFile` <a name="putStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile"></a>

```java
public void putStepsFile(IResolvable OR java.util.List<MrscalerAwsStepsFile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<MrscalerAwsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>>

---

##### `putTaskEbsBlockDevice` <a name="putTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice"></a>

```java
public void putTaskEbsBlockDevice(IResolvable OR java.util.List<MrscalerAwsTaskEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>>

---

##### `putTaskScalingDownPolicy` <a name="putTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy"></a>

```java
public void putTaskScalingDownPolicy(IResolvable OR java.util.List<MrscalerAwsTaskScalingDownPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>>

---

##### `putTaskScalingUpPolicy` <a name="putTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy"></a>

```java
public void putTaskScalingUpPolicy(IResolvable OR java.util.List<MrscalerAwsTaskScalingUpPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>>

---

##### `putTerminationPolicies` <a name="putTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies"></a>

```java
public void putTerminationPolicies(IResolvable OR java.util.List<MrscalerAwsTerminationPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>>

---

##### `resetAdditionalInfo` <a name="resetAdditionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalInfo"></a>

```java
public void resetAdditionalInfo()
```

##### `resetAdditionalPrimarySecurityGroups` <a name="resetAdditionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalPrimarySecurityGroups"></a>

```java
public void resetAdditionalPrimarySecurityGroups()
```

##### `resetAdditionalReplicaSecurityGroups` <a name="resetAdditionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalReplicaSecurityGroups"></a>

```java
public void resetAdditionalReplicaSecurityGroups()
```

##### `resetApplications` <a name="resetApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetApplications"></a>

```java
public void resetApplications()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetBootstrapActionsFile` <a name="resetBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetBootstrapActionsFile"></a>

```java
public void resetBootstrapActionsFile()
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetConfigurationsFile` <a name="resetConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetConfigurationsFile"></a>

```java
public void resetConfigurationsFile()
```

##### `resetCoreDesiredCapacity` <a name="resetCoreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreDesiredCapacity"></a>

```java
public void resetCoreDesiredCapacity()
```

##### `resetCoreEbsBlockDevice` <a name="resetCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsBlockDevice"></a>

```java
public void resetCoreEbsBlockDevice()
```

##### `resetCoreEbsOptimized` <a name="resetCoreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsOptimized"></a>

```java
public void resetCoreEbsOptimized()
```

##### `resetCoreInstanceTypes` <a name="resetCoreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreInstanceTypes"></a>

```java
public void resetCoreInstanceTypes()
```

##### `resetCoreLifecycle` <a name="resetCoreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreLifecycle"></a>

```java
public void resetCoreLifecycle()
```

##### `resetCoreMaxSize` <a name="resetCoreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMaxSize"></a>

```java
public void resetCoreMaxSize()
```

##### `resetCoreMinSize` <a name="resetCoreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMinSize"></a>

```java
public void resetCoreMinSize()
```

##### `resetCoreScalingDownPolicy` <a name="resetCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingDownPolicy"></a>

```java
public void resetCoreScalingDownPolicy()
```

##### `resetCoreScalingUpPolicy` <a name="resetCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingUpPolicy"></a>

```java
public void resetCoreScalingUpPolicy()
```

##### `resetCoreUnit` <a name="resetCoreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreUnit"></a>

```java
public void resetCoreUnit()
```

##### `resetCustomAmiId` <a name="resetCustomAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCustomAmiId"></a>

```java
public void resetCustomAmiId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEbsRootVolumeSize` <a name="resetEbsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEbsRootVolumeSize"></a>

```java
public void resetEbsRootVolumeSize()
```

##### `resetEc2KeyName` <a name="resetEc2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEc2KeyName"></a>

```java
public void resetEc2KeyName()
```

##### `resetExposeClusterId` <a name="resetExposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetExposeClusterId"></a>

```java
public void resetExposeClusterId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceWeights` <a name="resetInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetInstanceWeights"></a>

```java
public void resetInstanceWeights()
```

##### `resetJobFlowRole` <a name="resetJobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetJobFlowRole"></a>

```java
public void resetJobFlowRole()
```

##### `resetKeepJobFlowAlive` <a name="resetKeepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetKeepJobFlowAlive"></a>

```java
public void resetKeepJobFlowAlive()
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetLogUri"></a>

```java
public void resetLogUri()
```

##### `resetManagedPrimarySecurityGroup` <a name="resetManagedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedPrimarySecurityGroup"></a>

```java
public void resetManagedPrimarySecurityGroup()
```

##### `resetManagedReplicaSecurityGroup` <a name="resetManagedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedReplicaSecurityGroup"></a>

```java
public void resetManagedReplicaSecurityGroup()
```

##### `resetMasterEbsBlockDevice` <a name="resetMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsBlockDevice"></a>

```java
public void resetMasterEbsBlockDevice()
```

##### `resetMasterEbsOptimized` <a name="resetMasterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsOptimized"></a>

```java
public void resetMasterEbsOptimized()
```

##### `resetMasterInstanceTypes` <a name="resetMasterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterInstanceTypes"></a>

```java
public void resetMasterInstanceTypes()
```

##### `resetMasterLifecycle` <a name="resetMasterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterLifecycle"></a>

```java
public void resetMasterLifecycle()
```

##### `resetMasterTarget` <a name="resetMasterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterTarget"></a>

```java
public void resetMasterTarget()
```

##### `resetProvisioningTimeout` <a name="resetProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetProvisioningTimeout"></a>

```java
public void resetProvisioningTimeout()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReleaseLabel` <a name="resetReleaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetReleaseLabel"></a>

```java
public void resetReleaseLabel()
```

##### `resetRepoUpgradeOnBoot` <a name="resetRepoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRepoUpgradeOnBoot"></a>

```java
public void resetRepoUpgradeOnBoot()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetScheduledTask"></a>

```java
public void resetScheduledTask()
```

##### `resetSecurityConfig` <a name="resetSecurityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetSecurityConfig"></a>

```java
public void resetSecurityConfig()
```

##### `resetServiceAccessSecurityGroup` <a name="resetServiceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceAccessSecurityGroup"></a>

```java
public void resetServiceAccessSecurityGroup()
```

##### `resetServiceRole` <a name="resetServiceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceRole"></a>

```java
public void resetServiceRole()
```

##### `resetStepsFile` <a name="resetStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetStepsFile"></a>

```java
public void resetStepsFile()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskDesiredCapacity` <a name="resetTaskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskDesiredCapacity"></a>

```java
public void resetTaskDesiredCapacity()
```

##### `resetTaskEbsBlockDevice` <a name="resetTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsBlockDevice"></a>

```java
public void resetTaskEbsBlockDevice()
```

##### `resetTaskEbsOptimized` <a name="resetTaskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsOptimized"></a>

```java
public void resetTaskEbsOptimized()
```

##### `resetTaskInstanceTypes` <a name="resetTaskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskInstanceTypes"></a>

```java
public void resetTaskInstanceTypes()
```

##### `resetTaskLifecycle` <a name="resetTaskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskLifecycle"></a>

```java
public void resetTaskLifecycle()
```

##### `resetTaskMaxSize` <a name="resetTaskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMaxSize"></a>

```java
public void resetTaskMaxSize()
```

##### `resetTaskMinSize` <a name="resetTaskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMinSize"></a>

```java
public void resetTaskMinSize()
```

##### `resetTaskScalingDownPolicy` <a name="resetTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingDownPolicy"></a>

```java
public void resetTaskScalingDownPolicy()
```

##### `resetTaskScalingUpPolicy` <a name="resetTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingUpPolicy"></a>

```java
public void resetTaskScalingUpPolicy()
```

##### `resetTaskUnit` <a name="resetTaskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskUnit"></a>

```java
public void resetTaskUnit()
```

##### `resetTerminationPolicies` <a name="resetTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationPolicies"></a>

```java
public void resetTerminationPolicies()
```

##### `resetTerminationProtected` <a name="resetTerminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationProtected"></a>

```java
public void resetTerminationProtected()
```

##### `resetVisibleToAllUsers` <a name="resetVisibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetVisibleToAllUsers"></a>

```java
public void resetVisibleToAllUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MrscalerAws resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAws;

MrscalerAws.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAws;

MrscalerAws.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAws;

MrscalerAws.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAws;

MrscalerAws.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MrscalerAws.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MrscalerAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MrscalerAws to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MrscalerAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MrscalerAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applications">applications</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList">MrscalerAwsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFile">bootstrapActionsFile</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList">MrscalerAwsBootstrapActionsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFile">configurationsFile</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList">MrscalerAwsConfigurationsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDevice">coreEbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList">MrscalerAwsCoreEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicy">coreScalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList">MrscalerAwsCoreScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicy">coreScalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList">MrscalerAwsCoreScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeights">instanceWeights</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList">MrscalerAwsInstanceWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDevice">masterEbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList">MrscalerAwsMasterEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.outputClusterId">outputClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeout">provisioningTimeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference">MrscalerAwsProvisioningTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList">MrscalerAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFile">stepsFile</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList">MrscalerAwsStepsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList">MrscalerAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDevice">taskEbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList">MrscalerAwsTaskEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicy">taskScalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList">MrscalerAwsTaskScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicy">taskScalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList">MrscalerAwsTaskScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPolicies">terminationPolicies</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList">MrscalerAwsTerminationPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfoInput">additionalInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroupsInput">additionalPrimarySecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroupsInput">additionalReplicaSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applicationsInput">applicationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFileInput">bootstrapActionsFileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFileInput">configurationsFileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacityInput">coreDesiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDeviceInput">coreEbsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimizedInput">coreEbsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypesInput">coreInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycleInput">coreLifecycleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSizeInput">coreMaxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSizeInput">coreMinSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicyInput">coreScalingDownPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicyInput">coreScalingUpPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnitInput">coreUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiIdInput">customAmiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSizeInput">ebsRootVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyNameInput">ec2KeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterIdInput">exposeClusterIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeightsInput">instanceWeightsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRoleInput">jobFlowRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAliveInput">keepJobFlowAliveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUriInput">logUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroupInput">managedPrimarySecurityGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroupInput">managedReplicaSecurityGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDeviceInput">masterEbsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimizedInput">masterEbsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypesInput">masterInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycleInput">masterLifecycleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTargetInput">masterTargetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeoutInput">provisioningTimeoutInput</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabelInput">releaseLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBootInput">repoUpgradeOnBootInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfigInput">securityConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroupInput">serviceAccessSecurityGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRoleInput">serviceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFileInput">stepsFileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacityInput">taskDesiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDeviceInput">taskEbsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimizedInput">taskEbsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypesInput">taskInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycleInput">taskLifecycleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSizeInput">taskMaxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSizeInput">taskMinSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicyInput">taskScalingDownPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicyInput">taskScalingUpPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnitInput">taskUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPoliciesInput">terminationPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtectedInput">terminationProtectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsersInput">visibleToAllUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroups">additionalPrimarySecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroups">additionalReplicaSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacity">coreDesiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimized">coreEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypes">coreInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycle">coreLifecycle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSize">coreMaxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSize">coreMinSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnit">coreUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiId">customAmiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyName">ec2KeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterId">exposeClusterId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRole">jobFlowRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAlive">keepJobFlowAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroup">managedPrimarySecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroup">managedReplicaSecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimized">masterEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypes">masterInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycle">masterLifecycle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTarget">masterTarget</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBoot">repoUpgradeOnBoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfig">securityConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacity">taskDesiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimized">taskEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypes">taskInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycle">taskLifecycle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSize">taskMaxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSize">taskMinSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnit">taskUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtected">terminationProtected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applications"></a>

```java
public MrscalerAwsApplicationsList getApplications();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList">MrscalerAwsApplicationsList</a>

---

##### `bootstrapActionsFile`<sup>Required</sup> <a name="bootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFile"></a>

```java
public MrscalerAwsBootstrapActionsFileList getBootstrapActionsFile();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList">MrscalerAwsBootstrapActionsFileList</a>

---

##### `configurationsFile`<sup>Required</sup> <a name="configurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFile"></a>

```java
public MrscalerAwsConfigurationsFileList getConfigurationsFile();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList">MrscalerAwsConfigurationsFileList</a>

---

##### `coreEbsBlockDevice`<sup>Required</sup> <a name="coreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDevice"></a>

```java
public MrscalerAwsCoreEbsBlockDeviceList getCoreEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList">MrscalerAwsCoreEbsBlockDeviceList</a>

---

##### `coreScalingDownPolicy`<sup>Required</sup> <a name="coreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicy"></a>

```java
public MrscalerAwsCoreScalingDownPolicyList getCoreScalingDownPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList">MrscalerAwsCoreScalingDownPolicyList</a>

---

##### `coreScalingUpPolicy`<sup>Required</sup> <a name="coreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicy"></a>

```java
public MrscalerAwsCoreScalingUpPolicyList getCoreScalingUpPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList">MrscalerAwsCoreScalingUpPolicyList</a>

---

##### `instanceWeights`<sup>Required</sup> <a name="instanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeights"></a>

```java
public MrscalerAwsInstanceWeightsList getInstanceWeights();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList">MrscalerAwsInstanceWeightsList</a>

---

##### `masterEbsBlockDevice`<sup>Required</sup> <a name="masterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDevice"></a>

```java
public MrscalerAwsMasterEbsBlockDeviceList getMasterEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList">MrscalerAwsMasterEbsBlockDeviceList</a>

---

##### `outputClusterId`<sup>Required</sup> <a name="outputClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.outputClusterId"></a>

```java
public java.lang.String getOutputClusterId();
```

- *Type:* java.lang.String

---

##### `provisioningTimeout`<sup>Required</sup> <a name="provisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeout"></a>

```java
public MrscalerAwsProvisioningTimeoutOutputReference getProvisioningTimeout();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference">MrscalerAwsProvisioningTimeoutOutputReference</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTask"></a>

```java
public MrscalerAwsScheduledTaskList getScheduledTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList">MrscalerAwsScheduledTaskList</a>

---

##### `stepsFile`<sup>Required</sup> <a name="stepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFile"></a>

```java
public MrscalerAwsStepsFileList getStepsFile();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList">MrscalerAwsStepsFileList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tags"></a>

```java
public MrscalerAwsTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList">MrscalerAwsTagsList</a>

---

##### `taskEbsBlockDevice`<sup>Required</sup> <a name="taskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDevice"></a>

```java
public MrscalerAwsTaskEbsBlockDeviceList getTaskEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList">MrscalerAwsTaskEbsBlockDeviceList</a>

---

##### `taskScalingDownPolicy`<sup>Required</sup> <a name="taskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicy"></a>

```java
public MrscalerAwsTaskScalingDownPolicyList getTaskScalingDownPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList">MrscalerAwsTaskScalingDownPolicyList</a>

---

##### `taskScalingUpPolicy`<sup>Required</sup> <a name="taskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicy"></a>

```java
public MrscalerAwsTaskScalingUpPolicyList getTaskScalingUpPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList">MrscalerAwsTaskScalingUpPolicyList</a>

---

##### `terminationPolicies`<sup>Required</sup> <a name="terminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPolicies"></a>

```java
public MrscalerAwsTerminationPoliciesList getTerminationPolicies();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList">MrscalerAwsTerminationPoliciesList</a>

---

##### `additionalInfoInput`<sup>Optional</sup> <a name="additionalInfoInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfoInput"></a>

```java
public java.lang.String getAdditionalInfoInput();
```

- *Type:* java.lang.String

---

##### `additionalPrimarySecurityGroupsInput`<sup>Optional</sup> <a name="additionalPrimarySecurityGroupsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPrimarySecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalReplicaSecurityGroupsInput`<sup>Optional</sup> <a name="additionalReplicaSecurityGroupsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalReplicaSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applicationsInput"></a>

```java
public java.lang.Object getApplicationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bootstrapActionsFileInput`<sup>Optional</sup> <a name="bootstrapActionsFileInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFileInput"></a>

```java
public java.lang.Object getBootstrapActionsFileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `configurationsFileInput`<sup>Optional</sup> <a name="configurationsFileInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFileInput"></a>

```java
public java.lang.Object getConfigurationsFileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>>

---

##### `coreDesiredCapacityInput`<sup>Optional</sup> <a name="coreDesiredCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacityInput"></a>

```java
public java.lang.Number getCoreDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `coreEbsBlockDeviceInput`<sup>Optional</sup> <a name="coreEbsBlockDeviceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDeviceInput"></a>

```java
public java.lang.Object getCoreEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>>

---

##### `coreEbsOptimizedInput`<sup>Optional</sup> <a name="coreEbsOptimizedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimizedInput"></a>

```java
public java.lang.Object getCoreEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `coreInstanceTypesInput`<sup>Optional</sup> <a name="coreInstanceTypesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getCoreInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coreLifecycleInput`<sup>Optional</sup> <a name="coreLifecycleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycleInput"></a>

```java
public java.lang.String getCoreLifecycleInput();
```

- *Type:* java.lang.String

---

##### `coreMaxSizeInput`<sup>Optional</sup> <a name="coreMaxSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSizeInput"></a>

```java
public java.lang.Number getCoreMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `coreMinSizeInput`<sup>Optional</sup> <a name="coreMinSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSizeInput"></a>

```java
public java.lang.Number getCoreMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `coreScalingDownPolicyInput`<sup>Optional</sup> <a name="coreScalingDownPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicyInput"></a>

```java
public java.lang.Object getCoreScalingDownPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>>

---

##### `coreScalingUpPolicyInput`<sup>Optional</sup> <a name="coreScalingUpPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicyInput"></a>

```java
public java.lang.Object getCoreScalingUpPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>>

---

##### `coreUnitInput`<sup>Optional</sup> <a name="coreUnitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnitInput"></a>

```java
public java.lang.String getCoreUnitInput();
```

- *Type:* java.lang.String

---

##### `customAmiIdInput`<sup>Optional</sup> <a name="customAmiIdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiIdInput"></a>

```java
public java.lang.String getCustomAmiIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ebsRootVolumeSizeInput`<sup>Optional</sup> <a name="ebsRootVolumeSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSizeInput"></a>

```java
public java.lang.Number getEbsRootVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `ec2KeyNameInput`<sup>Optional</sup> <a name="ec2KeyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyNameInput"></a>

```java
public java.lang.String getEc2KeyNameInput();
```

- *Type:* java.lang.String

---

##### `exposeClusterIdInput`<sup>Optional</sup> <a name="exposeClusterIdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterIdInput"></a>

```java
public java.lang.Object getExposeClusterIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceWeightsInput`<sup>Optional</sup> <a name="instanceWeightsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeightsInput"></a>

```java
public java.lang.Object getInstanceWeightsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>>

---

##### `jobFlowRoleInput`<sup>Optional</sup> <a name="jobFlowRoleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRoleInput"></a>

```java
public java.lang.String getJobFlowRoleInput();
```

- *Type:* java.lang.String

---

##### `keepJobFlowAliveInput`<sup>Optional</sup> <a name="keepJobFlowAliveInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAliveInput"></a>

```java
public java.lang.Object getKeepJobFlowAliveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUriInput"></a>

```java
public java.lang.String getLogUriInput();
```

- *Type:* java.lang.String

---

##### `managedPrimarySecurityGroupInput`<sup>Optional</sup> <a name="managedPrimarySecurityGroupInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroupInput"></a>

```java
public java.lang.String getManagedPrimarySecurityGroupInput();
```

- *Type:* java.lang.String

---

##### `managedReplicaSecurityGroupInput`<sup>Optional</sup> <a name="managedReplicaSecurityGroupInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroupInput"></a>

```java
public java.lang.String getManagedReplicaSecurityGroupInput();
```

- *Type:* java.lang.String

---

##### `masterEbsBlockDeviceInput`<sup>Optional</sup> <a name="masterEbsBlockDeviceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDeviceInput"></a>

```java
public java.lang.Object getMasterEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>>

---

##### `masterEbsOptimizedInput`<sup>Optional</sup> <a name="masterEbsOptimizedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimizedInput"></a>

```java
public java.lang.Object getMasterEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterInstanceTypesInput`<sup>Optional</sup> <a name="masterInstanceTypesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getMasterInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `masterLifecycleInput`<sup>Optional</sup> <a name="masterLifecycleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycleInput"></a>

```java
public java.lang.String getMasterLifecycleInput();
```

- *Type:* java.lang.String

---

##### `masterTargetInput`<sup>Optional</sup> <a name="masterTargetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTargetInput"></a>

```java
public java.lang.Number getMasterTargetInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `provisioningTimeoutInput`<sup>Optional</sup> <a name="provisioningTimeoutInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeoutInput"></a>

```java
public MrscalerAwsProvisioningTimeout getProvisioningTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabelInput"></a>

```java
public java.lang.String getReleaseLabelInput();
```

- *Type:* java.lang.String

---

##### `repoUpgradeOnBootInput`<sup>Optional</sup> <a name="repoUpgradeOnBootInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBootInput"></a>

```java
public java.lang.String getRepoUpgradeOnBootInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTaskInput"></a>

```java
public java.lang.Object getScheduledTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>>

---

##### `securityConfigInput`<sup>Optional</sup> <a name="securityConfigInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfigInput"></a>

```java
public java.lang.String getSecurityConfigInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessSecurityGroupInput`<sup>Optional</sup> <a name="serviceAccessSecurityGroupInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroupInput"></a>

```java
public java.lang.String getServiceAccessSecurityGroupInput();
```

- *Type:* java.lang.String

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRoleInput"></a>

```java
public java.lang.String getServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `stepsFileInput`<sup>Optional</sup> <a name="stepsFileInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFileInput"></a>

```java
public java.lang.Object getStepsFileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>>

---

##### `taskDesiredCapacityInput`<sup>Optional</sup> <a name="taskDesiredCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacityInput"></a>

```java
public java.lang.Number getTaskDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `taskEbsBlockDeviceInput`<sup>Optional</sup> <a name="taskEbsBlockDeviceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDeviceInput"></a>

```java
public java.lang.Object getTaskEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>>

---

##### `taskEbsOptimizedInput`<sup>Optional</sup> <a name="taskEbsOptimizedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimizedInput"></a>

```java
public java.lang.Object getTaskEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskInstanceTypesInput`<sup>Optional</sup> <a name="taskInstanceTypesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getTaskInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taskLifecycleInput`<sup>Optional</sup> <a name="taskLifecycleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycleInput"></a>

```java
public java.lang.String getTaskLifecycleInput();
```

- *Type:* java.lang.String

---

##### `taskMaxSizeInput`<sup>Optional</sup> <a name="taskMaxSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSizeInput"></a>

```java
public java.lang.Number getTaskMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `taskMinSizeInput`<sup>Optional</sup> <a name="taskMinSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSizeInput"></a>

```java
public java.lang.Number getTaskMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `taskScalingDownPolicyInput`<sup>Optional</sup> <a name="taskScalingDownPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicyInput"></a>

```java
public java.lang.Object getTaskScalingDownPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>>

---

##### `taskScalingUpPolicyInput`<sup>Optional</sup> <a name="taskScalingUpPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicyInput"></a>

```java
public java.lang.Object getTaskScalingUpPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>>

---

##### `taskUnitInput`<sup>Optional</sup> <a name="taskUnitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnitInput"></a>

```java
public java.lang.String getTaskUnitInput();
```

- *Type:* java.lang.String

---

##### `terminationPoliciesInput`<sup>Optional</sup> <a name="terminationPoliciesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPoliciesInput"></a>

```java
public java.lang.Object getTerminationPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>>

---

##### `terminationProtectedInput`<sup>Optional</sup> <a name="terminationProtectedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtectedInput"></a>

```java
public java.lang.Object getTerminationProtectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibleToAllUsersInput`<sup>Optional</sup> <a name="visibleToAllUsersInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsersInput"></a>

```java
public java.lang.Object getVisibleToAllUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfo"></a>

```java
public java.lang.String getAdditionalInfo();
```

- *Type:* java.lang.String

---

##### `additionalPrimarySecurityGroups`<sup>Required</sup> <a name="additionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroups"></a>

```java
public java.util.List<java.lang.String> getAdditionalPrimarySecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalReplicaSecurityGroups`<sup>Required</sup> <a name="additionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getAdditionalReplicaSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `coreDesiredCapacity`<sup>Required</sup> <a name="coreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacity"></a>

```java
public java.lang.Number getCoreDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `coreEbsOptimized`<sup>Required</sup> <a name="coreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimized"></a>

```java
public java.lang.Object getCoreEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `coreInstanceTypes`<sup>Required</sup> <a name="coreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getCoreInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coreLifecycle`<sup>Required</sup> <a name="coreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycle"></a>

```java
public java.lang.String getCoreLifecycle();
```

- *Type:* java.lang.String

---

##### `coreMaxSize`<sup>Required</sup> <a name="coreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSize"></a>

```java
public java.lang.Number getCoreMaxSize();
```

- *Type:* java.lang.Number

---

##### `coreMinSize`<sup>Required</sup> <a name="coreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSize"></a>

```java
public java.lang.Number getCoreMinSize();
```

- *Type:* java.lang.Number

---

##### `coreUnit`<sup>Required</sup> <a name="coreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnit"></a>

```java
public java.lang.String getCoreUnit();
```

- *Type:* java.lang.String

---

##### `customAmiId`<sup>Required</sup> <a name="customAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiId"></a>

```java
public java.lang.String getCustomAmiId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ebsRootVolumeSize`<sup>Required</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSize"></a>

```java
public java.lang.Number getEbsRootVolumeSize();
```

- *Type:* java.lang.Number

---

##### `ec2KeyName`<sup>Required</sup> <a name="ec2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyName"></a>

```java
public java.lang.String getEc2KeyName();
```

- *Type:* java.lang.String

---

##### `exposeClusterId`<sup>Required</sup> <a name="exposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterId"></a>

```java
public java.lang.Object getExposeClusterId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobFlowRole`<sup>Required</sup> <a name="jobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRole"></a>

```java
public java.lang.String getJobFlowRole();
```

- *Type:* java.lang.String

---

##### `keepJobFlowAlive`<sup>Required</sup> <a name="keepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAlive"></a>

```java
public java.lang.Object getKeepJobFlowAlive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `managedPrimarySecurityGroup`<sup>Required</sup> <a name="managedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroup"></a>

```java
public java.lang.String getManagedPrimarySecurityGroup();
```

- *Type:* java.lang.String

---

##### `managedReplicaSecurityGroup`<sup>Required</sup> <a name="managedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroup"></a>

```java
public java.lang.String getManagedReplicaSecurityGroup();
```

- *Type:* java.lang.String

---

##### `masterEbsOptimized`<sup>Required</sup> <a name="masterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimized"></a>

```java
public java.lang.Object getMasterEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterInstanceTypes`<sup>Required</sup> <a name="masterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getMasterInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `masterLifecycle`<sup>Required</sup> <a name="masterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycle"></a>

```java
public java.lang.String getMasterLifecycle();
```

- *Type:* java.lang.String

---

##### `masterTarget`<sup>Required</sup> <a name="masterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTarget"></a>

```java
public java.lang.Number getMasterTarget();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

---

##### `repoUpgradeOnBoot`<sup>Required</sup> <a name="repoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBoot"></a>

```java
public java.lang.String getRepoUpgradeOnBoot();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `securityConfig`<sup>Required</sup> <a name="securityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfig"></a>

```java
public java.lang.String getSecurityConfig();
```

- *Type:* java.lang.String

---

##### `serviceAccessSecurityGroup`<sup>Required</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroup"></a>

```java
public java.lang.String getServiceAccessSecurityGroup();
```

- *Type:* java.lang.String

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `taskDesiredCapacity`<sup>Required</sup> <a name="taskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacity"></a>

```java
public java.lang.Number getTaskDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `taskEbsOptimized`<sup>Required</sup> <a name="taskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimized"></a>

```java
public java.lang.Object getTaskEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskInstanceTypes`<sup>Required</sup> <a name="taskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getTaskInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taskLifecycle`<sup>Required</sup> <a name="taskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycle"></a>

```java
public java.lang.String getTaskLifecycle();
```

- *Type:* java.lang.String

---

##### `taskMaxSize`<sup>Required</sup> <a name="taskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSize"></a>

```java
public java.lang.Number getTaskMaxSize();
```

- *Type:* java.lang.Number

---

##### `taskMinSize`<sup>Required</sup> <a name="taskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSize"></a>

```java
public java.lang.Number getTaskMinSize();
```

- *Type:* java.lang.Number

---

##### `taskUnit`<sup>Required</sup> <a name="taskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnit"></a>

```java
public java.lang.String getTaskUnit();
```

- *Type:* java.lang.String

---

##### `terminationProtected`<sup>Required</sup> <a name="terminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtected"></a>

```java
public java.lang.Object getTerminationProtected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibleToAllUsers`<sup>Required</sup> <a name="visibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsers"></a>

```java
public java.lang.Object getVisibleToAllUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MrscalerAwsApplications <a name="MrscalerAwsApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsApplications;

MrscalerAwsApplications.builder()
    .name(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#args MrscalerAws#args}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#version MrscalerAws#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#args MrscalerAws#args}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#version MrscalerAws#version}.

---

### MrscalerAwsBootstrapActionsFile <a name="MrscalerAwsBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsBootstrapActionsFile;

MrscalerAwsBootstrapActionsFile.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsConfig <a name="MrscalerAwsConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsConfig;

MrscalerAwsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .strategy(java.lang.String)
//  .additionalInfo(java.lang.String)
//  .additionalPrimarySecurityGroups(java.util.List<java.lang.String>)
//  .additionalReplicaSecurityGroups(java.util.List<java.lang.String>)
//  .applications(IResolvable)
//  .applications(java.util.List<MrscalerAwsApplications>)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .bootstrapActionsFile(IResolvable)
//  .bootstrapActionsFile(java.util.List<MrscalerAwsBootstrapActionsFile>)
//  .clusterId(java.lang.String)
//  .configurationsFile(IResolvable)
//  .configurationsFile(java.util.List<MrscalerAwsConfigurationsFile>)
//  .coreDesiredCapacity(java.lang.Number)
//  .coreEbsBlockDevice(IResolvable)
//  .coreEbsBlockDevice(java.util.List<MrscalerAwsCoreEbsBlockDevice>)
//  .coreEbsOptimized(java.lang.Boolean)
//  .coreEbsOptimized(IResolvable)
//  .coreInstanceTypes(java.util.List<java.lang.String>)
//  .coreLifecycle(java.lang.String)
//  .coreMaxSize(java.lang.Number)
//  .coreMinSize(java.lang.Number)
//  .coreScalingDownPolicy(IResolvable)
//  .coreScalingDownPolicy(java.util.List<MrscalerAwsCoreScalingDownPolicy>)
//  .coreScalingUpPolicy(IResolvable)
//  .coreScalingUpPolicy(java.util.List<MrscalerAwsCoreScalingUpPolicy>)
//  .coreUnit(java.lang.String)
//  .customAmiId(java.lang.String)
//  .description(java.lang.String)
//  .ebsRootVolumeSize(java.lang.Number)
//  .ec2KeyName(java.lang.String)
//  .exposeClusterId(java.lang.Boolean)
//  .exposeClusterId(IResolvable)
//  .id(java.lang.String)
//  .instanceWeights(IResolvable)
//  .instanceWeights(java.util.List<MrscalerAwsInstanceWeights>)
//  .jobFlowRole(java.lang.String)
//  .keepJobFlowAlive(java.lang.Boolean)
//  .keepJobFlowAlive(IResolvable)
//  .logUri(java.lang.String)
//  .managedPrimarySecurityGroup(java.lang.String)
//  .managedReplicaSecurityGroup(java.lang.String)
//  .masterEbsBlockDevice(IResolvable)
//  .masterEbsBlockDevice(java.util.List<MrscalerAwsMasterEbsBlockDevice>)
//  .masterEbsOptimized(java.lang.Boolean)
//  .masterEbsOptimized(IResolvable)
//  .masterInstanceTypes(java.util.List<java.lang.String>)
//  .masterLifecycle(java.lang.String)
//  .masterTarget(java.lang.Number)
//  .provisioningTimeout(MrscalerAwsProvisioningTimeout)
//  .region(java.lang.String)
//  .releaseLabel(java.lang.String)
//  .repoUpgradeOnBoot(java.lang.String)
//  .retries(java.lang.Number)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<MrscalerAwsScheduledTask>)
//  .securityConfig(java.lang.String)
//  .serviceAccessSecurityGroup(java.lang.String)
//  .serviceRole(java.lang.String)
//  .stepsFile(IResolvable)
//  .stepsFile(java.util.List<MrscalerAwsStepsFile>)
//  .tags(IResolvable)
//  .tags(java.util.List<MrscalerAwsTags>)
//  .taskDesiredCapacity(java.lang.Number)
//  .taskEbsBlockDevice(IResolvable)
//  .taskEbsBlockDevice(java.util.List<MrscalerAwsTaskEbsBlockDevice>)
//  .taskEbsOptimized(java.lang.Boolean)
//  .taskEbsOptimized(IResolvable)
//  .taskInstanceTypes(java.util.List<java.lang.String>)
//  .taskLifecycle(java.lang.String)
//  .taskMaxSize(java.lang.Number)
//  .taskMinSize(java.lang.Number)
//  .taskScalingDownPolicy(IResolvable)
//  .taskScalingDownPolicy(java.util.List<MrscalerAwsTaskScalingDownPolicy>)
//  .taskScalingUpPolicy(IResolvable)
//  .taskScalingUpPolicy(java.util.List<MrscalerAwsTaskScalingUpPolicy>)
//  .taskUnit(java.lang.String)
//  .terminationPolicies(IResolvable)
//  .terminationPolicies(java.util.List<MrscalerAwsTerminationPolicies>)
//  .terminationProtected(java.lang.Boolean)
//  .terminationProtected(IResolvable)
//  .visibleToAllUsers(java.lang.Boolean)
//  .visibleToAllUsers(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.strategy">strategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalPrimarySecurityGroups">additionalPrimarySecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalReplicaSecurityGroups">additionalReplicaSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.applications">applications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>></code> | applications block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.bootstrapActionsFile">bootstrapActionsFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>></code> | bootstrap_actions_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.configurationsFile">configurationsFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>></code> | configurations_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreDesiredCapacity">coreDesiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsBlockDevice">coreEbsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>></code> | core_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsOptimized">coreEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreInstanceTypes">coreInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreLifecycle">coreLifecycle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMaxSize">coreMaxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMinSize">coreMinSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingDownPolicy">coreScalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>></code> | core_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingUpPolicy">coreScalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>></code> | core_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreUnit">coreUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.customAmiId">customAmiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#description MrscalerAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ec2KeyName">ec2KeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.exposeClusterId">exposeClusterId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#id MrscalerAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.instanceWeights">instanceWeights</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>></code> | instance_weights block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.jobFlowRole">jobFlowRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.keepJobFlowAlive">keepJobFlowAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.logUri">logUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedPrimarySecurityGroup">managedPrimarySecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedReplicaSecurityGroup">managedReplicaSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsBlockDevice">masterEbsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>></code> | master_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsOptimized">masterEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterInstanceTypes">masterInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterLifecycle">masterLifecycle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterTarget">masterTarget</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioningTimeout">provisioningTimeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | provisioning_timeout block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#region MrscalerAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.repoUpgradeOnBoot">repoUpgradeOnBoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#retries MrscalerAws#retries}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.securityConfig">securityConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.stepsFile">stepsFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>></code> | steps_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskDesiredCapacity">taskDesiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsBlockDevice">taskEbsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>></code> | task_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsOptimized">taskEbsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskInstanceTypes">taskInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskLifecycle">taskLifecycle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMaxSize">taskMaxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMinSize">taskMinSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingDownPolicy">taskScalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>></code> | task_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingUpPolicy">taskScalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>></code> | task_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskUnit">taskUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationPolicies">terminationPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>></code> | termination_policies block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationProtected">terminationProtected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalInfo"></a>

```java
public java.lang.String getAdditionalInfo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}.

---

##### `additionalPrimarySecurityGroups`<sup>Optional</sup> <a name="additionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalPrimarySecurityGroups"></a>

```java
public java.util.List<java.lang.String> getAdditionalPrimarySecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}.

---

##### `additionalReplicaSecurityGroups`<sup>Optional</sup> <a name="additionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalReplicaSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getAdditionalReplicaSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.applications"></a>

```java
public java.lang.Object getApplications();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>>

applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#applications MrscalerAws#applications}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}.

---

##### `bootstrapActionsFile`<sup>Optional</sup> <a name="bootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.bootstrapActionsFile"></a>

```java
public java.lang.Object getBootstrapActionsFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>>

bootstrap_actions_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}.

---

##### `configurationsFile`<sup>Optional</sup> <a name="configurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.configurationsFile"></a>

```java
public java.lang.Object getConfigurationsFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>>

configurations_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#configurations_file MrscalerAws#configurations_file}

---

##### `coreDesiredCapacity`<sup>Optional</sup> <a name="coreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreDesiredCapacity"></a>

```java
public java.lang.Number getCoreDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}.

---

##### `coreEbsBlockDevice`<sup>Optional</sup> <a name="coreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsBlockDevice"></a>

```java
public java.lang.Object getCoreEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>>

core_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}

---

##### `coreEbsOptimized`<sup>Optional</sup> <a name="coreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsOptimized"></a>

```java
public java.lang.Object getCoreEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}.

---

##### `coreInstanceTypes`<sup>Optional</sup> <a name="coreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getCoreInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}.

---

##### `coreLifecycle`<sup>Optional</sup> <a name="coreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreLifecycle"></a>

```java
public java.lang.String getCoreLifecycle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}.

---

##### `coreMaxSize`<sup>Optional</sup> <a name="coreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMaxSize"></a>

```java
public java.lang.Number getCoreMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}.

---

##### `coreMinSize`<sup>Optional</sup> <a name="coreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMinSize"></a>

```java
public java.lang.Number getCoreMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}.

---

##### `coreScalingDownPolicy`<sup>Optional</sup> <a name="coreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingDownPolicy"></a>

```java
public java.lang.Object getCoreScalingDownPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>>

core_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}

---

##### `coreScalingUpPolicy`<sup>Optional</sup> <a name="coreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingUpPolicy"></a>

```java
public java.lang.Object getCoreScalingUpPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>>

core_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}

---

##### `coreUnit`<sup>Optional</sup> <a name="coreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreUnit"></a>

```java
public java.lang.String getCoreUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}.

---

##### `customAmiId`<sup>Optional</sup> <a name="customAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.customAmiId"></a>

```java
public java.lang.String getCustomAmiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#description MrscalerAws#description}.

---

##### `ebsRootVolumeSize`<sup>Optional</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ebsRootVolumeSize"></a>

```java
public java.lang.Number getEbsRootVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}.

---

##### `ec2KeyName`<sup>Optional</sup> <a name="ec2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ec2KeyName"></a>

```java
public java.lang.String getEc2KeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}.

---

##### `exposeClusterId`<sup>Optional</sup> <a name="exposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.exposeClusterId"></a>

```java
public java.lang.Object getExposeClusterId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#id MrscalerAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceWeights`<sup>Optional</sup> <a name="instanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.instanceWeights"></a>

```java
public java.lang.Object getInstanceWeights();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>>

instance_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#instance_weights MrscalerAws#instance_weights}

---

##### `jobFlowRole`<sup>Optional</sup> <a name="jobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.jobFlowRole"></a>

```java
public java.lang.String getJobFlowRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}.

---

##### `keepJobFlowAlive`<sup>Optional</sup> <a name="keepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.keepJobFlowAlive"></a>

```java
public java.lang.Object getKeepJobFlowAlive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}.

---

##### `managedPrimarySecurityGroup`<sup>Optional</sup> <a name="managedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedPrimarySecurityGroup"></a>

```java
public java.lang.String getManagedPrimarySecurityGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}.

---

##### `managedReplicaSecurityGroup`<sup>Optional</sup> <a name="managedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedReplicaSecurityGroup"></a>

```java
public java.lang.String getManagedReplicaSecurityGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}.

---

##### `masterEbsBlockDevice`<sup>Optional</sup> <a name="masterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsBlockDevice"></a>

```java
public java.lang.Object getMasterEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>>

master_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}

---

##### `masterEbsOptimized`<sup>Optional</sup> <a name="masterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsOptimized"></a>

```java
public java.lang.Object getMasterEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}.

---

##### `masterInstanceTypes`<sup>Optional</sup> <a name="masterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getMasterInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}.

---

##### `masterLifecycle`<sup>Optional</sup> <a name="masterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterLifecycle"></a>

```java
public java.lang.String getMasterLifecycle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}.

---

##### `masterTarget`<sup>Optional</sup> <a name="masterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterTarget"></a>

```java
public java.lang.Number getMasterTarget();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}.

---

##### `provisioningTimeout`<sup>Optional</sup> <a name="provisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioningTimeout"></a>

```java
public MrscalerAwsProvisioningTimeout getProvisioningTimeout();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

provisioning_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#region MrscalerAws#region}.

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}.

---

##### `repoUpgradeOnBoot`<sup>Optional</sup> <a name="repoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.repoUpgradeOnBoot"></a>

```java
public java.lang.String getRepoUpgradeOnBoot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#retries MrscalerAws#retries}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.scheduledTask"></a>

```java
public java.lang.Object getScheduledTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.securityConfig"></a>

```java
public java.lang.String getSecurityConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}.

---

##### `serviceAccessSecurityGroup`<sup>Optional</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceAccessSecurityGroup"></a>

```java
public java.lang.String getServiceAccessSecurityGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}.

---

##### `stepsFile`<sup>Optional</sup> <a name="stepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.stepsFile"></a>

```java
public java.lang.Object getStepsFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>>

steps_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#steps_file MrscalerAws#steps_file}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#tags MrscalerAws#tags}

---

##### `taskDesiredCapacity`<sup>Optional</sup> <a name="taskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskDesiredCapacity"></a>

```java
public java.lang.Number getTaskDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}.

---

##### `taskEbsBlockDevice`<sup>Optional</sup> <a name="taskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsBlockDevice"></a>

```java
public java.lang.Object getTaskEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>>

task_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}

---

##### `taskEbsOptimized`<sup>Optional</sup> <a name="taskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsOptimized"></a>

```java
public java.lang.Object getTaskEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}.

---

##### `taskInstanceTypes`<sup>Optional</sup> <a name="taskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getTaskInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}.

---

##### `taskLifecycle`<sup>Optional</sup> <a name="taskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskLifecycle"></a>

```java
public java.lang.String getTaskLifecycle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}.

---

##### `taskMaxSize`<sup>Optional</sup> <a name="taskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMaxSize"></a>

```java
public java.lang.Number getTaskMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}.

---

##### `taskMinSize`<sup>Optional</sup> <a name="taskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMinSize"></a>

```java
public java.lang.Number getTaskMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}.

---

##### `taskScalingDownPolicy`<sup>Optional</sup> <a name="taskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingDownPolicy"></a>

```java
public java.lang.Object getTaskScalingDownPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>>

task_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}

---

##### `taskScalingUpPolicy`<sup>Optional</sup> <a name="taskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingUpPolicy"></a>

```java
public java.lang.Object getTaskScalingUpPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>>

task_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}

---

##### `taskUnit`<sup>Optional</sup> <a name="taskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskUnit"></a>

```java
public java.lang.String getTaskUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationPolicies"></a>

```java
public java.lang.Object getTerminationPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>>

termination_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#termination_policies MrscalerAws#termination_policies}

---

##### `terminationProtected`<sup>Optional</sup> <a name="terminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationProtected"></a>

```java
public java.lang.Object getTerminationProtected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}.

---

##### `visibleToAllUsers`<sup>Optional</sup> <a name="visibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.visibleToAllUsers"></a>

```java
public java.lang.Object getVisibleToAllUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}.

---

### MrscalerAwsConfigurationsFile <a name="MrscalerAwsConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsConfigurationsFile;

MrscalerAwsConfigurationsFile.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsCoreEbsBlockDevice <a name="MrscalerAwsCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreEbsBlockDevice;

MrscalerAwsCoreEbsBlockDevice.builder()
    .sizeInGb(java.lang.Number)
    .volumeType(java.lang.String)
//  .iops(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsCoreScalingDownPolicy <a name="MrscalerAwsCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreScalingDownPolicy;

MrscalerAwsCoreScalingDownPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
    .unit(java.lang.String)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.String)
//  .cooldown(java.lang.Number)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationPeriods(java.lang.Number)
//  .maximum(java.lang.String)
//  .maxTargetCapacity(java.lang.String)
//  .minimum(java.lang.String)
//  .minTargetCapacity(java.lang.String)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maximum">maximum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minimum">minimum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsCoreScalingUpPolicy <a name="MrscalerAwsCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreScalingUpPolicy;

MrscalerAwsCoreScalingUpPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
    .unit(java.lang.String)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.String)
//  .cooldown(java.lang.Number)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationPeriods(java.lang.Number)
//  .maximum(java.lang.String)
//  .maxTargetCapacity(java.lang.String)
//  .minimum(java.lang.String)
//  .minTargetCapacity(java.lang.String)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maximum">maximum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minimum">minimum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsInstanceWeights <a name="MrscalerAwsInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsInstanceWeights;

MrscalerAwsInstanceWeights.builder()
    .instanceType(java.lang.String)
    .weightedCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}.

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}.

---

### MrscalerAwsMasterEbsBlockDevice <a name="MrscalerAwsMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsMasterEbsBlockDevice;

MrscalerAwsMasterEbsBlockDevice.builder()
    .sizeInGb(java.lang.Number)
    .volumeType(java.lang.String)
//  .iops(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsProvisioningTimeout <a name="MrscalerAwsProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsProvisioningTimeout;

MrscalerAwsProvisioningTimeout.builder()
    .timeout(java.lang.Number)
    .timeoutAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}. |

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}.

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}.

---

### MrscalerAwsScheduledTask <a name="MrscalerAwsScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsScheduledTask;

MrscalerAwsScheduledTask.builder()
    .cron(java.lang.String)
    .instanceGroupType(java.lang.String)
    .taskType(java.lang.String)
//  .desiredCapacity(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .maxCapacity(java.lang.String)
//  .minCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.cron">cron</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cron MrscalerAws#cron}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.instanceGroupType">instanceGroupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.minCapacity">minCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.cron"></a>

```java
public java.lang.String getCron();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cron MrscalerAws#cron}.

---

##### `instanceGroupType`<sup>Required</sup> <a name="instanceGroupType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.instanceGroupType"></a>

```java
public java.lang.String getInstanceGroupType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.desiredCapacity"></a>

```java
public java.lang.String getDesiredCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.maxCapacity"></a>

```java
public java.lang.String getMaxCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.minCapacity"></a>

```java
public java.lang.String getMinCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}.

---

### MrscalerAwsStepsFile <a name="MrscalerAwsStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsStepsFile;

MrscalerAwsStepsFile.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsTags <a name="MrscalerAwsTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTags;

MrscalerAwsTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#value MrscalerAws#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#value MrscalerAws#value}.

---

### MrscalerAwsTaskEbsBlockDevice <a name="MrscalerAwsTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskEbsBlockDevice;

MrscalerAwsTaskEbsBlockDevice.builder()
    .sizeInGb(java.lang.Number)
    .volumeType(java.lang.String)
//  .iops(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsTaskScalingDownPolicy <a name="MrscalerAwsTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskScalingDownPolicy;

MrscalerAwsTaskScalingDownPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
    .unit(java.lang.String)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.String)
//  .cooldown(java.lang.Number)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationPeriods(java.lang.Number)
//  .maximum(java.lang.String)
//  .maxTargetCapacity(java.lang.String)
//  .minimum(java.lang.String)
//  .minTargetCapacity(java.lang.String)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maximum">maximum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minimum">minimum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsTaskScalingUpPolicy <a name="MrscalerAwsTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskScalingUpPolicy;

MrscalerAwsTaskScalingUpPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
    .unit(java.lang.String)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.String)
//  .cooldown(java.lang.Number)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationPeriods(java.lang.Number)
//  .maximum(java.lang.String)
//  .maxTargetCapacity(java.lang.String)
//  .minimum(java.lang.String)
//  .minTargetCapacity(java.lang.String)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maximum">maximum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minimum">minimum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsTerminationPolicies <a name="MrscalerAwsTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTerminationPolicies;

MrscalerAwsTerminationPolicies.builder()
    .statements(IResolvable)
    .statements(java.util.List<MrscalerAwsTerminationPoliciesStatements>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.property.statements">statements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>></code> | statements block. |

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.property.statements"></a>

```java
public java.lang.Object getStatements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>>

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statements MrscalerAws#statements}

---

### MrscalerAwsTerminationPoliciesStatements <a name="MrscalerAwsTerminationPoliciesStatements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTerminationPoliciesStatements;

MrscalerAwsTerminationPoliciesStatements.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .threshold(java.lang.Number)
//  .evaluationPeriods(java.lang.Number)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrscalerAwsApplicationsList <a name="MrscalerAwsApplicationsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsApplicationsList;

new MrscalerAwsApplicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get"></a>

```java
public MrscalerAwsApplicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>>

---


### MrscalerAwsApplicationsOutputReference <a name="MrscalerAwsApplicationsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsApplicationsOutputReference;

new MrscalerAwsApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>

---


### MrscalerAwsBootstrapActionsFileList <a name="MrscalerAwsBootstrapActionsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsBootstrapActionsFileList;

new MrscalerAwsBootstrapActionsFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get"></a>

```java
public MrscalerAwsBootstrapActionsFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>>

---


### MrscalerAwsBootstrapActionsFileOutputReference <a name="MrscalerAwsBootstrapActionsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsBootstrapActionsFileOutputReference;

new MrscalerAwsBootstrapActionsFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>

---


### MrscalerAwsConfigurationsFileList <a name="MrscalerAwsConfigurationsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsConfigurationsFileList;

new MrscalerAwsConfigurationsFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get"></a>

```java
public MrscalerAwsConfigurationsFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>>

---


### MrscalerAwsConfigurationsFileOutputReference <a name="MrscalerAwsConfigurationsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsConfigurationsFileOutputReference;

new MrscalerAwsConfigurationsFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>

---


### MrscalerAwsCoreEbsBlockDeviceList <a name="MrscalerAwsCoreEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreEbsBlockDeviceList;

new MrscalerAwsCoreEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get"></a>

```java
public MrscalerAwsCoreEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>>

---


### MrscalerAwsCoreEbsBlockDeviceOutputReference <a name="MrscalerAwsCoreEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreEbsBlockDeviceOutputReference;

new MrscalerAwsCoreEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```java
public java.lang.Number getSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>

---


### MrscalerAwsCoreScalingDownPolicyList <a name="MrscalerAwsCoreScalingDownPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreScalingDownPolicyList;

new MrscalerAwsCoreScalingDownPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get"></a>

```java
public MrscalerAwsCoreScalingDownPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>>

---


### MrscalerAwsCoreScalingDownPolicyOutputReference <a name="MrscalerAwsCoreScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreScalingDownPolicyOutputReference;

new MrscalerAwsCoreScalingDownPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaxTargetCapacity">resetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinTargetCapacity">resetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```java
public void resetMaxTargetCapacity()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```java
public void resetMinTargetCapacity()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximumInput"></a>

```java
public java.lang.String getMaximumInput();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```java
public java.lang.String getMaxTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimumInput"></a>

```java
public java.lang.String getMinimumInput();
```

- *Type:* java.lang.String

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```java
public java.lang.String getMinTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>

---


### MrscalerAwsCoreScalingUpPolicyList <a name="MrscalerAwsCoreScalingUpPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreScalingUpPolicyList;

new MrscalerAwsCoreScalingUpPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get"></a>

```java
public MrscalerAwsCoreScalingUpPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>>

---


### MrscalerAwsCoreScalingUpPolicyOutputReference <a name="MrscalerAwsCoreScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsCoreScalingUpPolicyOutputReference;

new MrscalerAwsCoreScalingUpPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaxTargetCapacity">resetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinTargetCapacity">resetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```java
public void resetMaxTargetCapacity()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```java
public void resetMinTargetCapacity()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximumInput"></a>

```java
public java.lang.String getMaximumInput();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```java
public java.lang.String getMaxTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimumInput"></a>

```java
public java.lang.String getMinimumInput();
```

- *Type:* java.lang.String

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```java
public java.lang.String getMinTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>

---


### MrscalerAwsInstanceWeightsList <a name="MrscalerAwsInstanceWeightsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsInstanceWeightsList;

new MrscalerAwsInstanceWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get"></a>

```java
public MrscalerAwsInstanceWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>>

---


### MrscalerAwsInstanceWeightsOutputReference <a name="MrscalerAwsInstanceWeightsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsInstanceWeightsOutputReference;

new MrscalerAwsInstanceWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.Number getWeightedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>

---


### MrscalerAwsMasterEbsBlockDeviceList <a name="MrscalerAwsMasterEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsMasterEbsBlockDeviceList;

new MrscalerAwsMasterEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get"></a>

```java
public MrscalerAwsMasterEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>>

---


### MrscalerAwsMasterEbsBlockDeviceOutputReference <a name="MrscalerAwsMasterEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsMasterEbsBlockDeviceOutputReference;

new MrscalerAwsMasterEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```java
public java.lang.Number getSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>

---


### MrscalerAwsProvisioningTimeoutOutputReference <a name="MrscalerAwsProvisioningTimeoutOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsProvisioningTimeoutOutputReference;

new MrscalerAwsProvisioningTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutActionInput"></a>

```java
public java.lang.String getTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.internalValue"></a>

```java
public MrscalerAwsProvisioningTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---


### MrscalerAwsScheduledTaskList <a name="MrscalerAwsScheduledTaskList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsScheduledTaskList;

new MrscalerAwsScheduledTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get"></a>

```java
public MrscalerAwsScheduledTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>>

---


### MrscalerAwsScheduledTaskOutputReference <a name="MrscalerAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsScheduledTaskOutputReference;

new MrscalerAwsScheduledTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cronInput">cronInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupTypeInput">instanceGroupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cron">cron</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupType">instanceGroupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cronInput"></a>

```java
public java.lang.String getCronInput();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacityInput"></a>

```java
public java.lang.String getDesiredCapacityInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupTypeInput`<sup>Optional</sup> <a name="instanceGroupTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupTypeInput"></a>

```java
public java.lang.String getInstanceGroupTypeInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.String getMaxCapacityInput();
```

- *Type:* java.lang.String

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacityInput"></a>

```java
public java.lang.String getMinCapacityInput();
```

- *Type:* java.lang.String

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cron"></a>

```java
public java.lang.String getCron();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacity"></a>

```java
public java.lang.String getDesiredCapacity();
```

- *Type:* java.lang.String

---

##### `instanceGroupType`<sup>Required</sup> <a name="instanceGroupType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupType"></a>

```java
public java.lang.String getInstanceGroupType();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacity"></a>

```java
public java.lang.String getMaxCapacity();
```

- *Type:* java.lang.String

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacity"></a>

```java
public java.lang.String getMinCapacity();
```

- *Type:* java.lang.String

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>

---


### MrscalerAwsStepsFileList <a name="MrscalerAwsStepsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsStepsFileList;

new MrscalerAwsStepsFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get"></a>

```java
public MrscalerAwsStepsFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>>

---


### MrscalerAwsStepsFileOutputReference <a name="MrscalerAwsStepsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsStepsFileOutputReference;

new MrscalerAwsStepsFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>

---


### MrscalerAwsTagsList <a name="MrscalerAwsTagsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTagsList;

new MrscalerAwsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get"></a>

```java
public MrscalerAwsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>>

---


### MrscalerAwsTagsOutputReference <a name="MrscalerAwsTagsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTagsOutputReference;

new MrscalerAwsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>

---


### MrscalerAwsTaskEbsBlockDeviceList <a name="MrscalerAwsTaskEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskEbsBlockDeviceList;

new MrscalerAwsTaskEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get"></a>

```java
public MrscalerAwsTaskEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>>

---


### MrscalerAwsTaskEbsBlockDeviceOutputReference <a name="MrscalerAwsTaskEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskEbsBlockDeviceOutputReference;

new MrscalerAwsTaskEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```java
public java.lang.Number getSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>

---


### MrscalerAwsTaskScalingDownPolicyList <a name="MrscalerAwsTaskScalingDownPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskScalingDownPolicyList;

new MrscalerAwsTaskScalingDownPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get"></a>

```java
public MrscalerAwsTaskScalingDownPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>>

---


### MrscalerAwsTaskScalingDownPolicyOutputReference <a name="MrscalerAwsTaskScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskScalingDownPolicyOutputReference;

new MrscalerAwsTaskScalingDownPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaxTargetCapacity">resetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinTargetCapacity">resetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```java
public void resetMaxTargetCapacity()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```java
public void resetMinTargetCapacity()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximumInput"></a>

```java
public java.lang.String getMaximumInput();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```java
public java.lang.String getMaxTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimumInput"></a>

```java
public java.lang.String getMinimumInput();
```

- *Type:* java.lang.String

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```java
public java.lang.String getMinTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>

---


### MrscalerAwsTaskScalingUpPolicyList <a name="MrscalerAwsTaskScalingUpPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskScalingUpPolicyList;

new MrscalerAwsTaskScalingUpPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get"></a>

```java
public MrscalerAwsTaskScalingUpPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>>

---


### MrscalerAwsTaskScalingUpPolicyOutputReference <a name="MrscalerAwsTaskScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTaskScalingUpPolicyOutputReference;

new MrscalerAwsTaskScalingUpPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaxTargetCapacity">resetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinTargetCapacity">resetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```java
public void resetMaxTargetCapacity()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```java
public void resetMinTargetCapacity()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximumInput"></a>

```java
public java.lang.String getMaximumInput();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```java
public java.lang.String getMaxTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimumInput"></a>

```java
public java.lang.String getMinimumInput();
```

- *Type:* java.lang.String

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```java
public java.lang.String getMinTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>

---


### MrscalerAwsTerminationPoliciesList <a name="MrscalerAwsTerminationPoliciesList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTerminationPoliciesList;

new MrscalerAwsTerminationPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get"></a>

```java
public MrscalerAwsTerminationPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>>

---


### MrscalerAwsTerminationPoliciesOutputReference <a name="MrscalerAwsTerminationPoliciesOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTerminationPoliciesOutputReference;

new MrscalerAwsTerminationPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements">putStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatements` <a name="putStatements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements"></a>

```java
public void putStatements(IResolvable OR java.util.List<MrscalerAwsTerminationPoliciesStatements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList">MrscalerAwsTerminationPoliciesStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statementsInput">statementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statements"></a>

```java
public MrscalerAwsTerminationPoliciesStatementsList getStatements();
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList">MrscalerAwsTerminationPoliciesStatementsList</a>

---

##### `statementsInput`<sup>Optional</sup> <a name="statementsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statementsInput"></a>

```java
public java.lang.Object getStatementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>

---


### MrscalerAwsTerminationPoliciesStatementsList <a name="MrscalerAwsTerminationPoliciesStatementsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTerminationPoliciesStatementsList;

new MrscalerAwsTerminationPoliciesStatementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get"></a>

```java
public MrscalerAwsTerminationPoliciesStatementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>>

---


### MrscalerAwsTerminationPoliciesStatementsOutputReference <a name="MrscalerAwsTerminationPoliciesStatementsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.mrscaler_aws.MrscalerAwsTerminationPoliciesStatementsOutputReference;

new MrscalerAwsTerminationPoliciesStatementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>

---



