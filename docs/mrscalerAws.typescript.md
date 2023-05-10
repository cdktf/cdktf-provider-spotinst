# `spotinst_mrscaler_aws`

Refer to the Terraform Registory for docs: [`spotinst_mrscaler_aws`](https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws).

# `mrscalerAws` Submodule <a name="`mrscalerAws` Submodule" id="@cdktf/provider-spotinst.mrscalerAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrscalerAws <a name="MrscalerAws" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws spotinst_mrscaler_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAws(scope: Construct, id: string, config: MrscalerAwsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig">MrscalerAwsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig">MrscalerAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApplications` <a name="putApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications"></a>

```typescript
public putApplications(value: IResolvable | MrscalerAwsApplications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]

---

##### `putBootstrapActionsFile` <a name="putBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile"></a>

```typescript
public putBootstrapActionsFile(value: IResolvable | MrscalerAwsBootstrapActionsFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]

---

##### `putConfigurationsFile` <a name="putConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile"></a>

```typescript
public putConfigurationsFile(value: IResolvable | MrscalerAwsConfigurationsFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]

---

##### `putCoreEbsBlockDevice` <a name="putCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice"></a>

```typescript
public putCoreEbsBlockDevice(value: IResolvable | MrscalerAwsCoreEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]

---

##### `putCoreScalingDownPolicy` <a name="putCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy"></a>

```typescript
public putCoreScalingDownPolicy(value: IResolvable | MrscalerAwsCoreScalingDownPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]

---

##### `putCoreScalingUpPolicy` <a name="putCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy"></a>

```typescript
public putCoreScalingUpPolicy(value: IResolvable | MrscalerAwsCoreScalingUpPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]

---

##### `putInstanceWeights` <a name="putInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights"></a>

```typescript
public putInstanceWeights(value: IResolvable | MrscalerAwsInstanceWeights[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]

---

##### `putMasterEbsBlockDevice` <a name="putMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice"></a>

```typescript
public putMasterEbsBlockDevice(value: IResolvable | MrscalerAwsMasterEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]

---

##### `putProvisioningTimeout` <a name="putProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout"></a>

```typescript
public putProvisioningTimeout(value: MrscalerAwsProvisioningTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask"></a>

```typescript
public putScheduledTask(value: IResolvable | MrscalerAwsScheduledTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]

---

##### `putStepsFile` <a name="putStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile"></a>

```typescript
public putStepsFile(value: IResolvable | MrscalerAwsStepsFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags"></a>

```typescript
public putTags(value: IResolvable | MrscalerAwsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]

---

##### `putTaskEbsBlockDevice` <a name="putTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice"></a>

```typescript
public putTaskEbsBlockDevice(value: IResolvable | MrscalerAwsTaskEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]

---

##### `putTaskScalingDownPolicy` <a name="putTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy"></a>

```typescript
public putTaskScalingDownPolicy(value: IResolvable | MrscalerAwsTaskScalingDownPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]

---

##### `putTaskScalingUpPolicy` <a name="putTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy"></a>

```typescript
public putTaskScalingUpPolicy(value: IResolvable | MrscalerAwsTaskScalingUpPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]

---

##### `putTerminationPolicies` <a name="putTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies"></a>

```typescript
public putTerminationPolicies(value: IResolvable | MrscalerAwsTerminationPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]

---

##### `resetAdditionalInfo` <a name="resetAdditionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalInfo"></a>

```typescript
public resetAdditionalInfo(): void
```

##### `resetAdditionalPrimarySecurityGroups` <a name="resetAdditionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalPrimarySecurityGroups"></a>

```typescript
public resetAdditionalPrimarySecurityGroups(): void
```

##### `resetAdditionalReplicaSecurityGroups` <a name="resetAdditionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalReplicaSecurityGroups"></a>

```typescript
public resetAdditionalReplicaSecurityGroups(): void
```

##### `resetApplications` <a name="resetApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetApplications"></a>

```typescript
public resetApplications(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetBootstrapActionsFile` <a name="resetBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetBootstrapActionsFile"></a>

```typescript
public resetBootstrapActionsFile(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetConfigurationsFile` <a name="resetConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetConfigurationsFile"></a>

```typescript
public resetConfigurationsFile(): void
```

##### `resetCoreDesiredCapacity` <a name="resetCoreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreDesiredCapacity"></a>

```typescript
public resetCoreDesiredCapacity(): void
```

##### `resetCoreEbsBlockDevice` <a name="resetCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsBlockDevice"></a>

```typescript
public resetCoreEbsBlockDevice(): void
```

##### `resetCoreEbsOptimized` <a name="resetCoreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsOptimized"></a>

```typescript
public resetCoreEbsOptimized(): void
```

##### `resetCoreInstanceTypes` <a name="resetCoreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreInstanceTypes"></a>

```typescript
public resetCoreInstanceTypes(): void
```

##### `resetCoreLifecycle` <a name="resetCoreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreLifecycle"></a>

```typescript
public resetCoreLifecycle(): void
```

##### `resetCoreMaxSize` <a name="resetCoreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMaxSize"></a>

```typescript
public resetCoreMaxSize(): void
```

##### `resetCoreMinSize` <a name="resetCoreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMinSize"></a>

```typescript
public resetCoreMinSize(): void
```

##### `resetCoreScalingDownPolicy` <a name="resetCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingDownPolicy"></a>

```typescript
public resetCoreScalingDownPolicy(): void
```

##### `resetCoreScalingUpPolicy` <a name="resetCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingUpPolicy"></a>

```typescript
public resetCoreScalingUpPolicy(): void
```

##### `resetCoreUnit` <a name="resetCoreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreUnit"></a>

```typescript
public resetCoreUnit(): void
```

##### `resetCustomAmiId` <a name="resetCustomAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCustomAmiId"></a>

```typescript
public resetCustomAmiId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEbsRootVolumeSize` <a name="resetEbsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEbsRootVolumeSize"></a>

```typescript
public resetEbsRootVolumeSize(): void
```

##### `resetEc2KeyName` <a name="resetEc2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEc2KeyName"></a>

```typescript
public resetEc2KeyName(): void
```

##### `resetExposeClusterId` <a name="resetExposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetExposeClusterId"></a>

```typescript
public resetExposeClusterId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceWeights` <a name="resetInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetInstanceWeights"></a>

```typescript
public resetInstanceWeights(): void
```

##### `resetJobFlowRole` <a name="resetJobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetJobFlowRole"></a>

```typescript
public resetJobFlowRole(): void
```

##### `resetKeepJobFlowAlive` <a name="resetKeepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetKeepJobFlowAlive"></a>

```typescript
public resetKeepJobFlowAlive(): void
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetLogUri"></a>

```typescript
public resetLogUri(): void
```

##### `resetManagedPrimarySecurityGroup` <a name="resetManagedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedPrimarySecurityGroup"></a>

```typescript
public resetManagedPrimarySecurityGroup(): void
```

##### `resetManagedReplicaSecurityGroup` <a name="resetManagedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedReplicaSecurityGroup"></a>

```typescript
public resetManagedReplicaSecurityGroup(): void
```

##### `resetMasterEbsBlockDevice` <a name="resetMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsBlockDevice"></a>

```typescript
public resetMasterEbsBlockDevice(): void
```

##### `resetMasterEbsOptimized` <a name="resetMasterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsOptimized"></a>

```typescript
public resetMasterEbsOptimized(): void
```

##### `resetMasterInstanceTypes` <a name="resetMasterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterInstanceTypes"></a>

```typescript
public resetMasterInstanceTypes(): void
```

##### `resetMasterLifecycle` <a name="resetMasterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterLifecycle"></a>

```typescript
public resetMasterLifecycle(): void
```

##### `resetMasterTarget` <a name="resetMasterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterTarget"></a>

```typescript
public resetMasterTarget(): void
```

##### `resetProvisioningTimeout` <a name="resetProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetProvisioningTimeout"></a>

```typescript
public resetProvisioningTimeout(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReleaseLabel` <a name="resetReleaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetReleaseLabel"></a>

```typescript
public resetReleaseLabel(): void
```

##### `resetRepoUpgradeOnBoot` <a name="resetRepoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRepoUpgradeOnBoot"></a>

```typescript
public resetRepoUpgradeOnBoot(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetScheduledTask"></a>

```typescript
public resetScheduledTask(): void
```

##### `resetSecurityConfig` <a name="resetSecurityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetSecurityConfig"></a>

```typescript
public resetSecurityConfig(): void
```

##### `resetServiceAccessSecurityGroup` <a name="resetServiceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceAccessSecurityGroup"></a>

```typescript
public resetServiceAccessSecurityGroup(): void
```

##### `resetServiceRole` <a name="resetServiceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceRole"></a>

```typescript
public resetServiceRole(): void
```

##### `resetStepsFile` <a name="resetStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetStepsFile"></a>

```typescript
public resetStepsFile(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskDesiredCapacity` <a name="resetTaskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskDesiredCapacity"></a>

```typescript
public resetTaskDesiredCapacity(): void
```

##### `resetTaskEbsBlockDevice` <a name="resetTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsBlockDevice"></a>

```typescript
public resetTaskEbsBlockDevice(): void
```

##### `resetTaskEbsOptimized` <a name="resetTaskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsOptimized"></a>

```typescript
public resetTaskEbsOptimized(): void
```

##### `resetTaskInstanceTypes` <a name="resetTaskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskInstanceTypes"></a>

```typescript
public resetTaskInstanceTypes(): void
```

##### `resetTaskLifecycle` <a name="resetTaskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskLifecycle"></a>

```typescript
public resetTaskLifecycle(): void
```

##### `resetTaskMaxSize` <a name="resetTaskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMaxSize"></a>

```typescript
public resetTaskMaxSize(): void
```

##### `resetTaskMinSize` <a name="resetTaskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMinSize"></a>

```typescript
public resetTaskMinSize(): void
```

##### `resetTaskScalingDownPolicy` <a name="resetTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingDownPolicy"></a>

```typescript
public resetTaskScalingDownPolicy(): void
```

##### `resetTaskScalingUpPolicy` <a name="resetTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingUpPolicy"></a>

```typescript
public resetTaskScalingUpPolicy(): void
```

##### `resetTaskUnit` <a name="resetTaskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskUnit"></a>

```typescript
public resetTaskUnit(): void
```

##### `resetTerminationPolicies` <a name="resetTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationPolicies"></a>

```typescript
public resetTerminationPolicies(): void
```

##### `resetTerminationProtected` <a name="resetTerminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationProtected"></a>

```typescript
public resetTerminationProtected(): void
```

##### `resetVisibleToAllUsers` <a name="resetVisibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetVisibleToAllUsers"></a>

```typescript
public resetVisibleToAllUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

mrscalerAws.MrscalerAws.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

mrscalerAws.MrscalerAws.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

mrscalerAws.MrscalerAws.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applications">applications</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList">MrscalerAwsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFile">bootstrapActionsFile</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList">MrscalerAwsBootstrapActionsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFile">configurationsFile</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList">MrscalerAwsConfigurationsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDevice">coreEbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList">MrscalerAwsCoreEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicy">coreScalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList">MrscalerAwsCoreScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicy">coreScalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList">MrscalerAwsCoreScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeights">instanceWeights</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList">MrscalerAwsInstanceWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDevice">masterEbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList">MrscalerAwsMasterEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.outputClusterId">outputClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeout">provisioningTimeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference">MrscalerAwsProvisioningTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList">MrscalerAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFile">stepsFile</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList">MrscalerAwsStepsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList">MrscalerAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDevice">taskEbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList">MrscalerAwsTaskEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicy">taskScalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList">MrscalerAwsTaskScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicy">taskScalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList">MrscalerAwsTaskScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPolicies">terminationPolicies</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList">MrscalerAwsTerminationPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfoInput">additionalInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroupsInput">additionalPrimarySecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroupsInput">additionalReplicaSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applicationsInput">applicationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFileInput">bootstrapActionsFileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFileInput">configurationsFileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacityInput">coreDesiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDeviceInput">coreEbsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimizedInput">coreEbsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypesInput">coreInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycleInput">coreLifecycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSizeInput">coreMaxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSizeInput">coreMinSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicyInput">coreScalingDownPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicyInput">coreScalingUpPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnitInput">coreUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiIdInput">customAmiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSizeInput">ebsRootVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyNameInput">ec2KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterIdInput">exposeClusterIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeightsInput">instanceWeightsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRoleInput">jobFlowRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAliveInput">keepJobFlowAliveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUriInput">logUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroupInput">managedPrimarySecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroupInput">managedReplicaSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDeviceInput">masterEbsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimizedInput">masterEbsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypesInput">masterInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycleInput">masterLifecycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTargetInput">masterTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeoutInput">provisioningTimeoutInput</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabelInput">releaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBootInput">repoUpgradeOnBootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfigInput">securityConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroupInput">serviceAccessSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRoleInput">serviceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFileInput">stepsFileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacityInput">taskDesiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDeviceInput">taskEbsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimizedInput">taskEbsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypesInput">taskInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycleInput">taskLifecycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSizeInput">taskMaxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSizeInput">taskMinSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicyInput">taskScalingDownPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicyInput">taskScalingUpPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnitInput">taskUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPoliciesInput">terminationPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtectedInput">terminationProtectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsersInput">visibleToAllUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfo">additionalInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroups">additionalPrimarySecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroups">additionalReplicaSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacity">coreDesiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimized">coreEbsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypes">coreInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycle">coreLifecycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSize">coreMaxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSize">coreMinSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnit">coreUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiId">customAmiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyName">ec2KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterId">exposeClusterId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRole">jobFlowRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAlive">keepJobFlowAlive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroup">managedPrimarySecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroup">managedReplicaSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimized">masterEbsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypes">masterInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycle">masterLifecycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTarget">masterTarget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBoot">repoUpgradeOnBoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfig">securityConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacity">taskDesiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimized">taskEbsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypes">taskInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycle">taskLifecycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSize">taskMaxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSize">taskMinSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnit">taskUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtected">terminationProtected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applications"></a>

```typescript
public readonly applications: MrscalerAwsApplicationsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList">MrscalerAwsApplicationsList</a>

---

##### `bootstrapActionsFile`<sup>Required</sup> <a name="bootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFile"></a>

```typescript
public readonly bootstrapActionsFile: MrscalerAwsBootstrapActionsFileList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList">MrscalerAwsBootstrapActionsFileList</a>

---

##### `configurationsFile`<sup>Required</sup> <a name="configurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFile"></a>

```typescript
public readonly configurationsFile: MrscalerAwsConfigurationsFileList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList">MrscalerAwsConfigurationsFileList</a>

---

##### `coreEbsBlockDevice`<sup>Required</sup> <a name="coreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDevice"></a>

```typescript
public readonly coreEbsBlockDevice: MrscalerAwsCoreEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList">MrscalerAwsCoreEbsBlockDeviceList</a>

---

##### `coreScalingDownPolicy`<sup>Required</sup> <a name="coreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicy"></a>

```typescript
public readonly coreScalingDownPolicy: MrscalerAwsCoreScalingDownPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList">MrscalerAwsCoreScalingDownPolicyList</a>

---

##### `coreScalingUpPolicy`<sup>Required</sup> <a name="coreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicy"></a>

```typescript
public readonly coreScalingUpPolicy: MrscalerAwsCoreScalingUpPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList">MrscalerAwsCoreScalingUpPolicyList</a>

---

##### `instanceWeights`<sup>Required</sup> <a name="instanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeights"></a>

```typescript
public readonly instanceWeights: MrscalerAwsInstanceWeightsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList">MrscalerAwsInstanceWeightsList</a>

---

##### `masterEbsBlockDevice`<sup>Required</sup> <a name="masterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDevice"></a>

```typescript
public readonly masterEbsBlockDevice: MrscalerAwsMasterEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList">MrscalerAwsMasterEbsBlockDeviceList</a>

---

##### `outputClusterId`<sup>Required</sup> <a name="outputClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.outputClusterId"></a>

```typescript
public readonly outputClusterId: string;
```

- *Type:* string

---

##### `provisioningTimeout`<sup>Required</sup> <a name="provisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeout"></a>

```typescript
public readonly provisioningTimeout: MrscalerAwsProvisioningTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference">MrscalerAwsProvisioningTimeoutOutputReference</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: MrscalerAwsScheduledTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList">MrscalerAwsScheduledTaskList</a>

---

##### `stepsFile`<sup>Required</sup> <a name="stepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFile"></a>

```typescript
public readonly stepsFile: MrscalerAwsStepsFileList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList">MrscalerAwsStepsFileList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tags"></a>

```typescript
public readonly tags: MrscalerAwsTagsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList">MrscalerAwsTagsList</a>

---

##### `taskEbsBlockDevice`<sup>Required</sup> <a name="taskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDevice"></a>

```typescript
public readonly taskEbsBlockDevice: MrscalerAwsTaskEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList">MrscalerAwsTaskEbsBlockDeviceList</a>

---

##### `taskScalingDownPolicy`<sup>Required</sup> <a name="taskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicy"></a>

```typescript
public readonly taskScalingDownPolicy: MrscalerAwsTaskScalingDownPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList">MrscalerAwsTaskScalingDownPolicyList</a>

---

##### `taskScalingUpPolicy`<sup>Required</sup> <a name="taskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicy"></a>

```typescript
public readonly taskScalingUpPolicy: MrscalerAwsTaskScalingUpPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList">MrscalerAwsTaskScalingUpPolicyList</a>

---

##### `terminationPolicies`<sup>Required</sup> <a name="terminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: MrscalerAwsTerminationPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList">MrscalerAwsTerminationPoliciesList</a>

---

##### `additionalInfoInput`<sup>Optional</sup> <a name="additionalInfoInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfoInput"></a>

```typescript
public readonly additionalInfoInput: string;
```

- *Type:* string

---

##### `additionalPrimarySecurityGroupsInput`<sup>Optional</sup> <a name="additionalPrimarySecurityGroupsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroupsInput"></a>

```typescript
public readonly additionalPrimarySecurityGroupsInput: string[];
```

- *Type:* string[]

---

##### `additionalReplicaSecurityGroupsInput`<sup>Optional</sup> <a name="additionalReplicaSecurityGroupsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroupsInput"></a>

```typescript
public readonly additionalReplicaSecurityGroupsInput: string[];
```

- *Type:* string[]

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applicationsInput"></a>

```typescript
public readonly applicationsInput: IResolvable | MrscalerAwsApplications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `bootstrapActionsFileInput`<sup>Optional</sup> <a name="bootstrapActionsFileInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFileInput"></a>

```typescript
public readonly bootstrapActionsFileInput: IResolvable | MrscalerAwsBootstrapActionsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `configurationsFileInput`<sup>Optional</sup> <a name="configurationsFileInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFileInput"></a>

```typescript
public readonly configurationsFileInput: IResolvable | MrscalerAwsConfigurationsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]

---

##### `coreDesiredCapacityInput`<sup>Optional</sup> <a name="coreDesiredCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacityInput"></a>

```typescript
public readonly coreDesiredCapacityInput: number;
```

- *Type:* number

---

##### `coreEbsBlockDeviceInput`<sup>Optional</sup> <a name="coreEbsBlockDeviceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDeviceInput"></a>

```typescript
public readonly coreEbsBlockDeviceInput: IResolvable | MrscalerAwsCoreEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]

---

##### `coreEbsOptimizedInput`<sup>Optional</sup> <a name="coreEbsOptimizedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimizedInput"></a>

```typescript
public readonly coreEbsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `coreInstanceTypesInput`<sup>Optional</sup> <a name="coreInstanceTypesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypesInput"></a>

```typescript
public readonly coreInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `coreLifecycleInput`<sup>Optional</sup> <a name="coreLifecycleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycleInput"></a>

```typescript
public readonly coreLifecycleInput: string;
```

- *Type:* string

---

##### `coreMaxSizeInput`<sup>Optional</sup> <a name="coreMaxSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSizeInput"></a>

```typescript
public readonly coreMaxSizeInput: number;
```

- *Type:* number

---

##### `coreMinSizeInput`<sup>Optional</sup> <a name="coreMinSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSizeInput"></a>

```typescript
public readonly coreMinSizeInput: number;
```

- *Type:* number

---

##### `coreScalingDownPolicyInput`<sup>Optional</sup> <a name="coreScalingDownPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicyInput"></a>

```typescript
public readonly coreScalingDownPolicyInput: IResolvable | MrscalerAwsCoreScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]

---

##### `coreScalingUpPolicyInput`<sup>Optional</sup> <a name="coreScalingUpPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicyInput"></a>

```typescript
public readonly coreScalingUpPolicyInput: IResolvable | MrscalerAwsCoreScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]

---

##### `coreUnitInput`<sup>Optional</sup> <a name="coreUnitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnitInput"></a>

```typescript
public readonly coreUnitInput: string;
```

- *Type:* string

---

##### `customAmiIdInput`<sup>Optional</sup> <a name="customAmiIdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiIdInput"></a>

```typescript
public readonly customAmiIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ebsRootVolumeSizeInput`<sup>Optional</sup> <a name="ebsRootVolumeSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSizeInput"></a>

```typescript
public readonly ebsRootVolumeSizeInput: number;
```

- *Type:* number

---

##### `ec2KeyNameInput`<sup>Optional</sup> <a name="ec2KeyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyNameInput"></a>

```typescript
public readonly ec2KeyNameInput: string;
```

- *Type:* string

---

##### `exposeClusterIdInput`<sup>Optional</sup> <a name="exposeClusterIdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterIdInput"></a>

```typescript
public readonly exposeClusterIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceWeightsInput`<sup>Optional</sup> <a name="instanceWeightsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeightsInput"></a>

```typescript
public readonly instanceWeightsInput: IResolvable | MrscalerAwsInstanceWeights[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]

---

##### `jobFlowRoleInput`<sup>Optional</sup> <a name="jobFlowRoleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRoleInput"></a>

```typescript
public readonly jobFlowRoleInput: string;
```

- *Type:* string

---

##### `keepJobFlowAliveInput`<sup>Optional</sup> <a name="keepJobFlowAliveInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAliveInput"></a>

```typescript
public readonly keepJobFlowAliveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUriInput"></a>

```typescript
public readonly logUriInput: string;
```

- *Type:* string

---

##### `managedPrimarySecurityGroupInput`<sup>Optional</sup> <a name="managedPrimarySecurityGroupInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroupInput"></a>

```typescript
public readonly managedPrimarySecurityGroupInput: string;
```

- *Type:* string

---

##### `managedReplicaSecurityGroupInput`<sup>Optional</sup> <a name="managedReplicaSecurityGroupInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroupInput"></a>

```typescript
public readonly managedReplicaSecurityGroupInput: string;
```

- *Type:* string

---

##### `masterEbsBlockDeviceInput`<sup>Optional</sup> <a name="masterEbsBlockDeviceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDeviceInput"></a>

```typescript
public readonly masterEbsBlockDeviceInput: IResolvable | MrscalerAwsMasterEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]

---

##### `masterEbsOptimizedInput`<sup>Optional</sup> <a name="masterEbsOptimizedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimizedInput"></a>

```typescript
public readonly masterEbsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterInstanceTypesInput`<sup>Optional</sup> <a name="masterInstanceTypesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypesInput"></a>

```typescript
public readonly masterInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `masterLifecycleInput`<sup>Optional</sup> <a name="masterLifecycleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycleInput"></a>

```typescript
public readonly masterLifecycleInput: string;
```

- *Type:* string

---

##### `masterTargetInput`<sup>Optional</sup> <a name="masterTargetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTargetInput"></a>

```typescript
public readonly masterTargetInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `provisioningTimeoutInput`<sup>Optional</sup> <a name="provisioningTimeoutInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeoutInput"></a>

```typescript
public readonly provisioningTimeoutInput: MrscalerAwsProvisioningTimeout;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabelInput"></a>

```typescript
public readonly releaseLabelInput: string;
```

- *Type:* string

---

##### `repoUpgradeOnBootInput`<sup>Optional</sup> <a name="repoUpgradeOnBootInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBootInput"></a>

```typescript
public readonly repoUpgradeOnBootInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTaskInput"></a>

```typescript
public readonly scheduledTaskInput: IResolvable | MrscalerAwsScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]

---

##### `securityConfigInput`<sup>Optional</sup> <a name="securityConfigInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfigInput"></a>

```typescript
public readonly securityConfigInput: string;
```

- *Type:* string

---

##### `serviceAccessSecurityGroupInput`<sup>Optional</sup> <a name="serviceAccessSecurityGroupInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroupInput"></a>

```typescript
public readonly serviceAccessSecurityGroupInput: string;
```

- *Type:* string

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRoleInput"></a>

```typescript
public readonly serviceRoleInput: string;
```

- *Type:* string

---

##### `stepsFileInput`<sup>Optional</sup> <a name="stepsFileInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFileInput"></a>

```typescript
public readonly stepsFileInput: IResolvable | MrscalerAwsStepsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MrscalerAwsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]

---

##### `taskDesiredCapacityInput`<sup>Optional</sup> <a name="taskDesiredCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacityInput"></a>

```typescript
public readonly taskDesiredCapacityInput: number;
```

- *Type:* number

---

##### `taskEbsBlockDeviceInput`<sup>Optional</sup> <a name="taskEbsBlockDeviceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDeviceInput"></a>

```typescript
public readonly taskEbsBlockDeviceInput: IResolvable | MrscalerAwsTaskEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]

---

##### `taskEbsOptimizedInput`<sup>Optional</sup> <a name="taskEbsOptimizedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimizedInput"></a>

```typescript
public readonly taskEbsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskInstanceTypesInput`<sup>Optional</sup> <a name="taskInstanceTypesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypesInput"></a>

```typescript
public readonly taskInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `taskLifecycleInput`<sup>Optional</sup> <a name="taskLifecycleInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycleInput"></a>

```typescript
public readonly taskLifecycleInput: string;
```

- *Type:* string

---

##### `taskMaxSizeInput`<sup>Optional</sup> <a name="taskMaxSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSizeInput"></a>

```typescript
public readonly taskMaxSizeInput: number;
```

- *Type:* number

---

##### `taskMinSizeInput`<sup>Optional</sup> <a name="taskMinSizeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSizeInput"></a>

```typescript
public readonly taskMinSizeInput: number;
```

- *Type:* number

---

##### `taskScalingDownPolicyInput`<sup>Optional</sup> <a name="taskScalingDownPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicyInput"></a>

```typescript
public readonly taskScalingDownPolicyInput: IResolvable | MrscalerAwsTaskScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]

---

##### `taskScalingUpPolicyInput`<sup>Optional</sup> <a name="taskScalingUpPolicyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicyInput"></a>

```typescript
public readonly taskScalingUpPolicyInput: IResolvable | MrscalerAwsTaskScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]

---

##### `taskUnitInput`<sup>Optional</sup> <a name="taskUnitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnitInput"></a>

```typescript
public readonly taskUnitInput: string;
```

- *Type:* string

---

##### `terminationPoliciesInput`<sup>Optional</sup> <a name="terminationPoliciesInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPoliciesInput"></a>

```typescript
public readonly terminationPoliciesInput: IResolvable | MrscalerAwsTerminationPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]

---

##### `terminationProtectedInput`<sup>Optional</sup> <a name="terminationProtectedInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtectedInput"></a>

```typescript
public readonly terminationProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibleToAllUsersInput`<sup>Optional</sup> <a name="visibleToAllUsersInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsersInput"></a>

```typescript
public readonly visibleToAllUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: string;
```

- *Type:* string

---

##### `additionalPrimarySecurityGroups`<sup>Required</sup> <a name="additionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroups"></a>

```typescript
public readonly additionalPrimarySecurityGroups: string[];
```

- *Type:* string[]

---

##### `additionalReplicaSecurityGroups`<sup>Required</sup> <a name="additionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroups"></a>

```typescript
public readonly additionalReplicaSecurityGroups: string[];
```

- *Type:* string[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `coreDesiredCapacity`<sup>Required</sup> <a name="coreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacity"></a>

```typescript
public readonly coreDesiredCapacity: number;
```

- *Type:* number

---

##### `coreEbsOptimized`<sup>Required</sup> <a name="coreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimized"></a>

```typescript
public readonly coreEbsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `coreInstanceTypes`<sup>Required</sup> <a name="coreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypes"></a>

```typescript
public readonly coreInstanceTypes: string[];
```

- *Type:* string[]

---

##### `coreLifecycle`<sup>Required</sup> <a name="coreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycle"></a>

```typescript
public readonly coreLifecycle: string;
```

- *Type:* string

---

##### `coreMaxSize`<sup>Required</sup> <a name="coreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSize"></a>

```typescript
public readonly coreMaxSize: number;
```

- *Type:* number

---

##### `coreMinSize`<sup>Required</sup> <a name="coreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSize"></a>

```typescript
public readonly coreMinSize: number;
```

- *Type:* number

---

##### `coreUnit`<sup>Required</sup> <a name="coreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnit"></a>

```typescript
public readonly coreUnit: string;
```

- *Type:* string

---

##### `customAmiId`<sup>Required</sup> <a name="customAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiId"></a>

```typescript
public readonly customAmiId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ebsRootVolumeSize`<sup>Required</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSize"></a>

```typescript
public readonly ebsRootVolumeSize: number;
```

- *Type:* number

---

##### `ec2KeyName`<sup>Required</sup> <a name="ec2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyName"></a>

```typescript
public readonly ec2KeyName: string;
```

- *Type:* string

---

##### `exposeClusterId`<sup>Required</sup> <a name="exposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterId"></a>

```typescript
public readonly exposeClusterId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobFlowRole`<sup>Required</sup> <a name="jobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRole"></a>

```typescript
public readonly jobFlowRole: string;
```

- *Type:* string

---

##### `keepJobFlowAlive`<sup>Required</sup> <a name="keepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAlive"></a>

```typescript
public readonly keepJobFlowAlive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `managedPrimarySecurityGroup`<sup>Required</sup> <a name="managedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroup"></a>

```typescript
public readonly managedPrimarySecurityGroup: string;
```

- *Type:* string

---

##### `managedReplicaSecurityGroup`<sup>Required</sup> <a name="managedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroup"></a>

```typescript
public readonly managedReplicaSecurityGroup: string;
```

- *Type:* string

---

##### `masterEbsOptimized`<sup>Required</sup> <a name="masterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimized"></a>

```typescript
public readonly masterEbsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterInstanceTypes`<sup>Required</sup> <a name="masterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypes"></a>

```typescript
public readonly masterInstanceTypes: string[];
```

- *Type:* string[]

---

##### `masterLifecycle`<sup>Required</sup> <a name="masterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycle"></a>

```typescript
public readonly masterLifecycle: string;
```

- *Type:* string

---

##### `masterTarget`<sup>Required</sup> <a name="masterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTarget"></a>

```typescript
public readonly masterTarget: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

---

##### `repoUpgradeOnBoot`<sup>Required</sup> <a name="repoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBoot"></a>

```typescript
public readonly repoUpgradeOnBoot: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `securityConfig`<sup>Required</sup> <a name="securityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfig"></a>

```typescript
public readonly securityConfig: string;
```

- *Type:* string

---

##### `serviceAccessSecurityGroup`<sup>Required</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroup"></a>

```typescript
public readonly serviceAccessSecurityGroup: string;
```

- *Type:* string

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `taskDesiredCapacity`<sup>Required</sup> <a name="taskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacity"></a>

```typescript
public readonly taskDesiredCapacity: number;
```

- *Type:* number

---

##### `taskEbsOptimized`<sup>Required</sup> <a name="taskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimized"></a>

```typescript
public readonly taskEbsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskInstanceTypes`<sup>Required</sup> <a name="taskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypes"></a>

```typescript
public readonly taskInstanceTypes: string[];
```

- *Type:* string[]

---

##### `taskLifecycle`<sup>Required</sup> <a name="taskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycle"></a>

```typescript
public readonly taskLifecycle: string;
```

- *Type:* string

---

##### `taskMaxSize`<sup>Required</sup> <a name="taskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSize"></a>

```typescript
public readonly taskMaxSize: number;
```

- *Type:* number

---

##### `taskMinSize`<sup>Required</sup> <a name="taskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSize"></a>

```typescript
public readonly taskMinSize: number;
```

- *Type:* number

---

##### `taskUnit`<sup>Required</sup> <a name="taskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnit"></a>

```typescript
public readonly taskUnit: string;
```

- *Type:* string

---

##### `terminationProtected`<sup>Required</sup> <a name="terminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtected"></a>

```typescript
public readonly terminationProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibleToAllUsers`<sup>Required</sup> <a name="visibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsers"></a>

```typescript
public readonly visibleToAllUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MrscalerAwsApplications <a name="MrscalerAwsApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsApplications: mrscalerAws.MrscalerAwsApplications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#args MrscalerAws#args}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#version MrscalerAws#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#args MrscalerAws#args}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#version MrscalerAws#version}.

---

### MrscalerAwsBootstrapActionsFile <a name="MrscalerAwsBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsBootstrapActionsFile: mrscalerAws.MrscalerAwsBootstrapActionsFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsConfig <a name="MrscalerAwsConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsConfig: mrscalerAws.MrscalerAwsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.strategy">strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalInfo">additionalInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalPrimarySecurityGroups">additionalPrimarySecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalReplicaSecurityGroups">additionalReplicaSecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.applications">applications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]</code> | applications block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.bootstrapActionsFile">bootstrapActionsFile</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]</code> | bootstrap_actions_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.configurationsFile">configurationsFile</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]</code> | configurations_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreDesiredCapacity">coreDesiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsBlockDevice">coreEbsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]</code> | core_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsOptimized">coreEbsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreInstanceTypes">coreInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreLifecycle">coreLifecycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMaxSize">coreMaxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMinSize">coreMinSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingDownPolicy">coreScalingDownPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]</code> | core_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingUpPolicy">coreScalingUpPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]</code> | core_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreUnit">coreUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.customAmiId">customAmiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#description MrscalerAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ec2KeyName">ec2KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.exposeClusterId">exposeClusterId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#id MrscalerAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.instanceWeights">instanceWeights</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]</code> | instance_weights block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.jobFlowRole">jobFlowRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.keepJobFlowAlive">keepJobFlowAlive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.logUri">logUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedPrimarySecurityGroup">managedPrimarySecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedReplicaSecurityGroup">managedReplicaSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsBlockDevice">masterEbsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]</code> | master_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsOptimized">masterEbsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterInstanceTypes">masterInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterLifecycle">masterLifecycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterTarget">masterTarget</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioningTimeout">provisioningTimeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | provisioning_timeout block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#region MrscalerAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.repoUpgradeOnBoot">repoUpgradeOnBoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.retries">retries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.scheduledTask">scheduledTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.securityConfig">securityConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceRole">serviceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.stepsFile">stepsFile</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]</code> | steps_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskDesiredCapacity">taskDesiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsBlockDevice">taskEbsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]</code> | task_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsOptimized">taskEbsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskInstanceTypes">taskInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskLifecycle">taskLifecycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMaxSize">taskMaxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMinSize">taskMinSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingDownPolicy">taskScalingDownPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]</code> | task_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingUpPolicy">taskScalingUpPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]</code> | task_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskUnit">taskUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationPolicies">terminationPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]</code> | termination_policies block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationProtected">terminationProtected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}.

---

##### `additionalPrimarySecurityGroups`<sup>Optional</sup> <a name="additionalPrimarySecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalPrimarySecurityGroups"></a>

```typescript
public readonly additionalPrimarySecurityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}.

---

##### `additionalReplicaSecurityGroups`<sup>Optional</sup> <a name="additionalReplicaSecurityGroups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalReplicaSecurityGroups"></a>

```typescript
public readonly additionalReplicaSecurityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.applications"></a>

```typescript
public readonly applications: IResolvable | MrscalerAwsApplications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]

applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#applications MrscalerAws#applications}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}.

---

##### `bootstrapActionsFile`<sup>Optional</sup> <a name="bootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.bootstrapActionsFile"></a>

```typescript
public readonly bootstrapActionsFile: IResolvable | MrscalerAwsBootstrapActionsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]

bootstrap_actions_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}.

---

##### `configurationsFile`<sup>Optional</sup> <a name="configurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.configurationsFile"></a>

```typescript
public readonly configurationsFile: IResolvable | MrscalerAwsConfigurationsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]

configurations_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#configurations_file MrscalerAws#configurations_file}

---

##### `coreDesiredCapacity`<sup>Optional</sup> <a name="coreDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreDesiredCapacity"></a>

```typescript
public readonly coreDesiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}.

---

##### `coreEbsBlockDevice`<sup>Optional</sup> <a name="coreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsBlockDevice"></a>

```typescript
public readonly coreEbsBlockDevice: IResolvable | MrscalerAwsCoreEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]

core_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}

---

##### `coreEbsOptimized`<sup>Optional</sup> <a name="coreEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsOptimized"></a>

```typescript
public readonly coreEbsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}.

---

##### `coreInstanceTypes`<sup>Optional</sup> <a name="coreInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreInstanceTypes"></a>

```typescript
public readonly coreInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}.

---

##### `coreLifecycle`<sup>Optional</sup> <a name="coreLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreLifecycle"></a>

```typescript
public readonly coreLifecycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}.

---

##### `coreMaxSize`<sup>Optional</sup> <a name="coreMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMaxSize"></a>

```typescript
public readonly coreMaxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}.

---

##### `coreMinSize`<sup>Optional</sup> <a name="coreMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMinSize"></a>

```typescript
public readonly coreMinSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}.

---

##### `coreScalingDownPolicy`<sup>Optional</sup> <a name="coreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingDownPolicy"></a>

```typescript
public readonly coreScalingDownPolicy: IResolvable | MrscalerAwsCoreScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]

core_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}

---

##### `coreScalingUpPolicy`<sup>Optional</sup> <a name="coreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingUpPolicy"></a>

```typescript
public readonly coreScalingUpPolicy: IResolvable | MrscalerAwsCoreScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]

core_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}

---

##### `coreUnit`<sup>Optional</sup> <a name="coreUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreUnit"></a>

```typescript
public readonly coreUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}.

---

##### `customAmiId`<sup>Optional</sup> <a name="customAmiId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.customAmiId"></a>

```typescript
public readonly customAmiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#description MrscalerAws#description}.

---

##### `ebsRootVolumeSize`<sup>Optional</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ebsRootVolumeSize"></a>

```typescript
public readonly ebsRootVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}.

---

##### `ec2KeyName`<sup>Optional</sup> <a name="ec2KeyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ec2KeyName"></a>

```typescript
public readonly ec2KeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}.

---

##### `exposeClusterId`<sup>Optional</sup> <a name="exposeClusterId" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.exposeClusterId"></a>

```typescript
public readonly exposeClusterId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#id MrscalerAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceWeights`<sup>Optional</sup> <a name="instanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.instanceWeights"></a>

```typescript
public readonly instanceWeights: IResolvable | MrscalerAwsInstanceWeights[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]

instance_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#instance_weights MrscalerAws#instance_weights}

---

##### `jobFlowRole`<sup>Optional</sup> <a name="jobFlowRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.jobFlowRole"></a>

```typescript
public readonly jobFlowRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}.

---

##### `keepJobFlowAlive`<sup>Optional</sup> <a name="keepJobFlowAlive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.keepJobFlowAlive"></a>

```typescript
public readonly keepJobFlowAlive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}.

---

##### `managedPrimarySecurityGroup`<sup>Optional</sup> <a name="managedPrimarySecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedPrimarySecurityGroup"></a>

```typescript
public readonly managedPrimarySecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}.

---

##### `managedReplicaSecurityGroup`<sup>Optional</sup> <a name="managedReplicaSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedReplicaSecurityGroup"></a>

```typescript
public readonly managedReplicaSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}.

---

##### `masterEbsBlockDevice`<sup>Optional</sup> <a name="masterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsBlockDevice"></a>

```typescript
public readonly masterEbsBlockDevice: IResolvable | MrscalerAwsMasterEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]

master_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}

---

##### `masterEbsOptimized`<sup>Optional</sup> <a name="masterEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsOptimized"></a>

```typescript
public readonly masterEbsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}.

---

##### `masterInstanceTypes`<sup>Optional</sup> <a name="masterInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterInstanceTypes"></a>

```typescript
public readonly masterInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}.

---

##### `masterLifecycle`<sup>Optional</sup> <a name="masterLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterLifecycle"></a>

```typescript
public readonly masterLifecycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}.

---

##### `masterTarget`<sup>Optional</sup> <a name="masterTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterTarget"></a>

```typescript
public readonly masterTarget: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}.

---

##### `provisioningTimeout`<sup>Optional</sup> <a name="provisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioningTimeout"></a>

```typescript
public readonly provisioningTimeout: MrscalerAwsProvisioningTimeout;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

provisioning_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#region MrscalerAws#region}.

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}.

---

##### `repoUpgradeOnBoot`<sup>Optional</sup> <a name="repoUpgradeOnBoot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.repoUpgradeOnBoot"></a>

```typescript
public readonly repoUpgradeOnBoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: IResolvable | MrscalerAwsScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.securityConfig"></a>

```typescript
public readonly securityConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}.

---

##### `serviceAccessSecurityGroup`<sup>Optional</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceAccessSecurityGroup"></a>

```typescript
public readonly serviceAccessSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}.

---

##### `stepsFile`<sup>Optional</sup> <a name="stepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.stepsFile"></a>

```typescript
public readonly stepsFile: IResolvable | MrscalerAwsStepsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]

steps_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#steps_file MrscalerAws#steps_file}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MrscalerAwsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#tags MrscalerAws#tags}

---

##### `taskDesiredCapacity`<sup>Optional</sup> <a name="taskDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskDesiredCapacity"></a>

```typescript
public readonly taskDesiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}.

---

##### `taskEbsBlockDevice`<sup>Optional</sup> <a name="taskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsBlockDevice"></a>

```typescript
public readonly taskEbsBlockDevice: IResolvable | MrscalerAwsTaskEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]

task_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}

---

##### `taskEbsOptimized`<sup>Optional</sup> <a name="taskEbsOptimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsOptimized"></a>

```typescript
public readonly taskEbsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}.

---

##### `taskInstanceTypes`<sup>Optional</sup> <a name="taskInstanceTypes" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskInstanceTypes"></a>

```typescript
public readonly taskInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}.

---

##### `taskLifecycle`<sup>Optional</sup> <a name="taskLifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskLifecycle"></a>

```typescript
public readonly taskLifecycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}.

---

##### `taskMaxSize`<sup>Optional</sup> <a name="taskMaxSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMaxSize"></a>

```typescript
public readonly taskMaxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}.

---

##### `taskMinSize`<sup>Optional</sup> <a name="taskMinSize" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMinSize"></a>

```typescript
public readonly taskMinSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}.

---

##### `taskScalingDownPolicy`<sup>Optional</sup> <a name="taskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingDownPolicy"></a>

```typescript
public readonly taskScalingDownPolicy: IResolvable | MrscalerAwsTaskScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]

task_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}

---

##### `taskScalingUpPolicy`<sup>Optional</sup> <a name="taskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingUpPolicy"></a>

```typescript
public readonly taskScalingUpPolicy: IResolvable | MrscalerAwsTaskScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]

task_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}

---

##### `taskUnit`<sup>Optional</sup> <a name="taskUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskUnit"></a>

```typescript
public readonly taskUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: IResolvable | MrscalerAwsTerminationPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]

termination_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#termination_policies MrscalerAws#termination_policies}

---

##### `terminationProtected`<sup>Optional</sup> <a name="terminationProtected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationProtected"></a>

```typescript
public readonly terminationProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}.

---

##### `visibleToAllUsers`<sup>Optional</sup> <a name="visibleToAllUsers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.visibleToAllUsers"></a>

```typescript
public readonly visibleToAllUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}.

---

### MrscalerAwsConfigurationsFile <a name="MrscalerAwsConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsConfigurationsFile: mrscalerAws.MrscalerAwsConfigurationsFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsCoreEbsBlockDevice <a name="MrscalerAwsCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsCoreEbsBlockDevice: mrscalerAws.MrscalerAwsCoreEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsCoreScalingDownPolicy <a name="MrscalerAwsCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsCoreScalingDownPolicy: mrscalerAws.MrscalerAwsCoreScalingDownPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maximum">maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minimum">minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsCoreScalingUpPolicy <a name="MrscalerAwsCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsCoreScalingUpPolicy: mrscalerAws.MrscalerAwsCoreScalingUpPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maximum">maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minimum">minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsInstanceWeights <a name="MrscalerAwsInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsInstanceWeights: mrscalerAws.MrscalerAwsInstanceWeights = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}.

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}.

---

### MrscalerAwsMasterEbsBlockDevice <a name="MrscalerAwsMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsMasterEbsBlockDevice: mrscalerAws.MrscalerAwsMasterEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsProvisioningTimeout <a name="MrscalerAwsProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsProvisioningTimeout: mrscalerAws.MrscalerAwsProvisioningTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}. |

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}.

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}.

---

### MrscalerAwsScheduledTask <a name="MrscalerAwsScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsScheduledTask: mrscalerAws.MrscalerAwsScheduledTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.cron">cron</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cron MrscalerAws#cron}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.instanceGroupType">instanceGroupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.desiredCapacity">desiredCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.minCapacity">minCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cron MrscalerAws#cron}.

---

##### `instanceGroupType`<sup>Required</sup> <a name="instanceGroupType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.instanceGroupType"></a>

```typescript
public readonly instanceGroupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}.

---

### MrscalerAwsStepsFile <a name="MrscalerAwsStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsStepsFile: mrscalerAws.MrscalerAwsStepsFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsTags <a name="MrscalerAwsTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsTags: mrscalerAws.MrscalerAwsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#value MrscalerAws#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#value MrscalerAws#value}.

---

### MrscalerAwsTaskEbsBlockDevice <a name="MrscalerAwsTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsTaskEbsBlockDevice: mrscalerAws.MrscalerAwsTaskEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsTaskScalingDownPolicy <a name="MrscalerAwsTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsTaskScalingDownPolicy: mrscalerAws.MrscalerAwsTaskScalingDownPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maximum">maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minimum">minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsTaskScalingUpPolicy <a name="MrscalerAwsTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsTaskScalingUpPolicy: mrscalerAws.MrscalerAwsTaskScalingUpPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maximum">maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minimum">minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsTerminationPolicies <a name="MrscalerAwsTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsTerminationPolicies: mrscalerAws.MrscalerAwsTerminationPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.property.statements">statements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]</code> | statements block. |

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.property.statements"></a>

```typescript
public readonly statements: IResolvable | MrscalerAwsTerminationPoliciesStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statements MrscalerAws#statements}

---

### MrscalerAwsTerminationPoliciesStatements <a name="MrscalerAwsTerminationPoliciesStatements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

const mrscalerAwsTerminationPoliciesStatements: mrscalerAws.MrscalerAwsTerminationPoliciesStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.117.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrscalerAwsApplicationsList <a name="MrscalerAwsApplicationsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsApplicationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get"></a>

```typescript
public get(index: number): MrscalerAwsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsApplications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>[]

---


### MrscalerAwsApplicationsOutputReference <a name="MrscalerAwsApplicationsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsApplicationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsApplications | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a> | cdktf.IResolvable

---


### MrscalerAwsBootstrapActionsFileList <a name="MrscalerAwsBootstrapActionsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsBootstrapActionsFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get"></a>

```typescript
public get(index: number): MrscalerAwsBootstrapActionsFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsBootstrapActionsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>[]

---


### MrscalerAwsBootstrapActionsFileOutputReference <a name="MrscalerAwsBootstrapActionsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsBootstrapActionsFile | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a> | cdktf.IResolvable

---


### MrscalerAwsConfigurationsFileList <a name="MrscalerAwsConfigurationsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsConfigurationsFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get"></a>

```typescript
public get(index: number): MrscalerAwsConfigurationsFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsConfigurationsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>[]

---


### MrscalerAwsConfigurationsFileOutputReference <a name="MrscalerAwsConfigurationsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsConfigurationsFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsConfigurationsFile | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a> | cdktf.IResolvable

---


### MrscalerAwsCoreEbsBlockDeviceList <a name="MrscalerAwsCoreEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): MrscalerAwsCoreEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsCoreEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>[]

---


### MrscalerAwsCoreEbsBlockDeviceOutputReference <a name="MrscalerAwsCoreEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsCoreEbsBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a> | cdktf.IResolvable

---


### MrscalerAwsCoreScalingDownPolicyList <a name="MrscalerAwsCoreScalingDownPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsCoreScalingDownPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get"></a>

```typescript
public get(index: number): MrscalerAwsCoreScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsCoreScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>[]

---


### MrscalerAwsCoreScalingDownPolicyOutputReference <a name="MrscalerAwsCoreScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```typescript
public resetMaxTargetCapacity(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```typescript
public resetMinTargetCapacity(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: string;
```

- *Type:* string

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```typescript
public readonly maxTargetCapacityInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: string;
```

- *Type:* string

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```typescript
public readonly minTargetCapacityInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsCoreScalingDownPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a> | cdktf.IResolvable

---


### MrscalerAwsCoreScalingUpPolicyList <a name="MrscalerAwsCoreScalingUpPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsCoreScalingUpPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get"></a>

```typescript
public get(index: number): MrscalerAwsCoreScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsCoreScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>[]

---


### MrscalerAwsCoreScalingUpPolicyOutputReference <a name="MrscalerAwsCoreScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```typescript
public resetMaxTargetCapacity(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```typescript
public resetMinTargetCapacity(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: string;
```

- *Type:* string

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```typescript
public readonly maxTargetCapacityInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: string;
```

- *Type:* string

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```typescript
public readonly minTargetCapacityInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsCoreScalingUpPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a> | cdktf.IResolvable

---


### MrscalerAwsInstanceWeightsList <a name="MrscalerAwsInstanceWeightsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsInstanceWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get"></a>

```typescript
public get(index: number): MrscalerAwsInstanceWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsInstanceWeights[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>[]

---


### MrscalerAwsInstanceWeightsOutputReference <a name="MrscalerAwsInstanceWeightsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsInstanceWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsInstanceWeights | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a> | cdktf.IResolvable

---


### MrscalerAwsMasterEbsBlockDeviceList <a name="MrscalerAwsMasterEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): MrscalerAwsMasterEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsMasterEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>[]

---


### MrscalerAwsMasterEbsBlockDeviceOutputReference <a name="MrscalerAwsMasterEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsMasterEbsBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a> | cdktf.IResolvable

---


### MrscalerAwsProvisioningTimeoutOutputReference <a name="MrscalerAwsProvisioningTimeoutOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutActionInput"></a>

```typescript
public readonly timeoutActionInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsProvisioningTimeout;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---


### MrscalerAwsScheduledTaskList <a name="MrscalerAwsScheduledTaskList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsScheduledTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get"></a>

```typescript
public get(index: number): MrscalerAwsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>[]

---


### MrscalerAwsScheduledTaskOutputReference <a name="MrscalerAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsScheduledTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetDesiredCapacity"></a>

```typescript
public resetDesiredCapacity(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMinCapacity"></a>

```typescript
public resetMinCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupTypeInput">instanceGroupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacity">desiredCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupType">instanceGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacity">minCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: string;
```

- *Type:* string

---

##### `instanceGroupTypeInput`<sup>Optional</sup> <a name="instanceGroupTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupTypeInput"></a>

```typescript
public readonly instanceGroupTypeInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: string;
```

- *Type:* string

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: string;
```

- *Type:* string

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: string;
```

- *Type:* string

---

##### `instanceGroupType`<sup>Required</sup> <a name="instanceGroupType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupType"></a>

```typescript
public readonly instanceGroupType: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsScheduledTask | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a> | cdktf.IResolvable

---


### MrscalerAwsStepsFileList <a name="MrscalerAwsStepsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsStepsFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get"></a>

```typescript
public get(index: number): MrscalerAwsStepsFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsStepsFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>[]

---


### MrscalerAwsStepsFileOutputReference <a name="MrscalerAwsStepsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsStepsFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsStepsFile | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a> | cdktf.IResolvable

---


### MrscalerAwsTagsList <a name="MrscalerAwsTagsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get"></a>

```typescript
public get(index: number): MrscalerAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>[]

---


### MrscalerAwsTagsOutputReference <a name="MrscalerAwsTagsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsTags | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a> | cdktf.IResolvable

---


### MrscalerAwsTaskEbsBlockDeviceList <a name="MrscalerAwsTaskEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): MrscalerAwsTaskEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsTaskEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>[]

---


### MrscalerAwsTaskEbsBlockDeviceOutputReference <a name="MrscalerAwsTaskEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsTaskEbsBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a> | cdktf.IResolvable

---


### MrscalerAwsTaskScalingDownPolicyList <a name="MrscalerAwsTaskScalingDownPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTaskScalingDownPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get"></a>

```typescript
public get(index: number): MrscalerAwsTaskScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsTaskScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>[]

---


### MrscalerAwsTaskScalingDownPolicyOutputReference <a name="MrscalerAwsTaskScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```typescript
public resetMaxTargetCapacity(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```typescript
public resetMinTargetCapacity(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: string;
```

- *Type:* string

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```typescript
public readonly maxTargetCapacityInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: string;
```

- *Type:* string

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```typescript
public readonly minTargetCapacityInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsTaskScalingDownPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a> | cdktf.IResolvable

---


### MrscalerAwsTaskScalingUpPolicyList <a name="MrscalerAwsTaskScalingUpPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTaskScalingUpPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get"></a>

```typescript
public get(index: number): MrscalerAwsTaskScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsTaskScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>[]

---


### MrscalerAwsTaskScalingUpPolicyOutputReference <a name="MrscalerAwsTaskScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```typescript
public resetMaxTargetCapacity(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```typescript
public resetMinTargetCapacity(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: string;
```

- *Type:* string

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```typescript
public readonly maxTargetCapacityInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: string;
```

- *Type:* string

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```typescript
public readonly minTargetCapacityInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```typescript
public readonly maxTargetCapacity: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsTaskScalingUpPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a> | cdktf.IResolvable

---


### MrscalerAwsTerminationPoliciesList <a name="MrscalerAwsTerminationPoliciesList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTerminationPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get"></a>

```typescript
public get(index: number): MrscalerAwsTerminationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsTerminationPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>[]

---


### MrscalerAwsTerminationPoliciesOutputReference <a name="MrscalerAwsTerminationPoliciesOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatements` <a name="putStatements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements"></a>

```typescript
public putStatements(value: IResolvable | MrscalerAwsTerminationPoliciesStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList">MrscalerAwsTerminationPoliciesStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statementsInput">statementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statements"></a>

```typescript
public readonly statements: MrscalerAwsTerminationPoliciesStatementsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList">MrscalerAwsTerminationPoliciesStatementsList</a>

---

##### `statementsInput`<sup>Optional</sup> <a name="statementsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statementsInput"></a>

```typescript
public readonly statementsInput: IResolvable | MrscalerAwsTerminationPoliciesStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsTerminationPolicies | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a> | cdktf.IResolvable

---


### MrscalerAwsTerminationPoliciesStatementsList <a name="MrscalerAwsTerminationPoliciesStatementsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get"></a>

```typescript
public get(index: number): MrscalerAwsTerminationPoliciesStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrscalerAwsTerminationPoliciesStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>[]

---


### MrscalerAwsTerminationPoliciesStatementsOutputReference <a name="MrscalerAwsTerminationPoliciesStatementsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer"></a>

```typescript
import { mrscalerAws } from '@cdktf/provider-spotinst'

new mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MrscalerAwsTerminationPoliciesStatements | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a> | cdktf.IResolvable

---



